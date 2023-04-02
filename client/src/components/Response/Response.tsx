import { useSelector } from "react-redux";
import NoImgAvatar from "../NoImgAvatar/NoImgAvatar";
import UserProfileImg from "../UserProfileImg/UserProfileImg";
import UserHeader from "../UserHeader/UserHeader";
import LikesSection from "../LikesContent/LikesContent";
import { ResponseProps } from "../../types/types";
import { IRootState } from "../../interfaces/interfaces";
import {
  ResponseContainer,
  LikesContainer,
  UserContainer,
  HeaderDateContainer,
  DateParagraph,
  ResponseContent,
  ResponseParagraph,
} from "./Response.style";

const Response = ({ response }: ResponseProps) => {
  const loggedUserData = useSelector((state: IRootState) => state.userData);
  return (
    <ResponseContainer>
      <UserContainer>
        {response.author.pic !== "" ? (
          <UserProfileImg
            imgId={response.author.pic}
            width={25}
            height={25}
            radius={30}
          ></UserProfileImg>
        ) : (
          <NoImgAvatar height={30} width={30} />
        )}
        <HeaderDateContainer>
          <UserHeader
            name={response.author.firstName!}
            lastName={response.author.lastName!}
            userId={response.author._id!}
          />
          <DateParagraph>
            <span>{new Date(response.created).toDateString()} </span>
            <span>{new Date(response.created).getHours()}:</span>
            <span>
              {new Date(response.created).getMinutes() < 10
                ? `0${new Date(response.created).getMinutes()}`
                : new Date(response.created).getMinutes()}
            </span>
          </DateParagraph>
        </HeaderDateContainer>
      </UserContainer>
      <ResponseContent>
        <ResponseParagraph>{response.content}</ResponseParagraph>
      </ResponseContent>
      <LikesContainer>
        <LikesSection
          likeStatus={
            response.likes.includes(loggedUserData._id) ? true : false
          }
          likes={response.likes.length}
          postId={response._id}
          type="commentResponse"
        />
      </LikesContainer>
    </ResponseContainer>
  );
};

export default Response;
