import { useEffect, useState } from "react";
import { Dispatch } from "redux";
import { useDispatch, useSelector } from "react-redux";
import UserProfileImg from "../UserProfileImg/UserProfileImg";
import NoImgAvatar from "../NoImgAvatar/NoImgAvatar";
import LoadingIcon from "../LoadingIcon/LoadingIcon";
import TextArea from "../TextArea/TextArea";
import UserHeader from "../UserHeader/UserHeader";
import SubInput from "../SubmitInput/SubmitInput";
import LikesSection from "../LikesContent/LikesContent";
import Response from "../Response/Response";
import { ICommentResponse, IRootState } from "../../interfaces/interfaces";
import { CommentProps } from "../../types/types";
import { fetchCommentResponses } from "../../services/api/comments";
import {
  responsesVisibleHandler,
  changeResponseValue,
  publishResponse,
} from "./Service";
import {
  CommentContainer,
  Form,
  InputContainer,
  SubmitContainer,
  Paragraph,
  UserContainer,
  HeaderDateContainer,
  DateParagraph,
  CommentContentParagraph,
  ResponsesTitle,
  ResponsesContainer,
} from "./Comment.style";

const Comment = ({ comment, thoughtId }: CommentProps): JSX.Element => {
  const loggedUserData = useSelector((state: IRootState) => state.userData);

  const [responseContent, newResponseContent] = useState<string>("");
  //   const [responses, setNewResponses] = useState<
  //     Array<ICommentResponse> | Array<string>
  //   >(comment.responses);
  const [responses, setNewResponses] = useState<
    Array<ICommentResponse> | Array<string>
  >([]);
  const [responsesIds, setResponsesIds] = useState<Array<string>>(
    comment.responses
  );
  const [responsesVisible, setResponsesVisible] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <>
      <CommentContainer>
        <UserContainer>
          {comment.author.pic !== "" ? (
            <UserProfileImg
              imgId={comment.author.pic}
              width={30}
              height={30}
              radius={30}
            ></UserProfileImg>
          ) : (
            <NoImgAvatar height={30} width={30} />
          )}
          <HeaderDateContainer>
            <UserHeader
              name={comment.author.firstName!}
              lastName={comment.author.lastName!}
              userId={comment.author._id!}
            />
            <DateParagraph>
              <span>{new Date(comment.created).toDateString()} </span>
              <span>{new Date(comment.created).getHours()}:</span>
              <span>
                {new Date(comment.created).getMinutes() < 10
                  ? `0${new Date(comment.created).getMinutes()}`
                  : new Date(comment.created).getMinutes()}
              </span>
            </DateParagraph>
          </HeaderDateContainer>
        </UserContainer>
        <CommentContentParagraph>{comment.content}</CommentContentParagraph>
        <LikesSection
          likeStatus={comment.likes.includes(loggedUserData._id) ? true : false}
          likes={comment.likes.length}
          postId={comment._id}
          type="comments"
        />
        <ResponsesTitle
          onClick={() => {
            responsesVisibleHandler(responsesVisible, setResponsesVisible);
            if (!responsesVisible) {
              fetchCommentResponses(
                thoughtId,
                comment._id,
                setNewResponses,
                setLoading
              );
              setLoading(true);
            }
          }}
        >
          {responsesVisible
            ? `hide responses: ${responsesIds.length}`
            : `see responses: ${responsesIds.length}`}
        </ResponsesTitle>
      </CommentContainer>
      {responsesVisible && (
        <ResponsesContainer>
          <Form
            onSubmit={(e: React.SyntheticEvent) => {
              publishResponse(
                e,
                responseContent,
                loggedUserData,
                comment._id,
                responses,
                setNewResponses,
                responsesIds,
                setResponsesIds
              );
            }}
          >
            <InputContainer>
              <TextArea
                placeholder="Write response..."
                name="comments"
                width={"100%"}
                rows={5}
                cols={5}
                value={responseContent}
                onChangeHandler={(e: React.SyntheticEvent) => {
                  changeResponseValue(e, newResponseContent);
                  console.log(responseContent);
                }}
              />
            </InputContainer>
            <SubmitContainer>
              <SubInput value={`Publish response`} />
            </SubmitContainer>
          </Form>
          {loading && <LoadingIcon />}
          {!loading &&
            responses.length !== 0 &&
            responses.map((resp) =>
              typeof resp !== "string" ? (
                <Response response={resp} key={resp._id} />
              ) : null
            )}
          {!loading && responsesIds.length === 0 && (
            <Paragraph>No responses</Paragraph>
          )}
        </ResponsesContainer>
      )}
    </>
  );
};

export default Comment;
