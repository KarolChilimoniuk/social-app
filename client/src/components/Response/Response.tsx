import NoImgAvatar from "../NoImgAvatar/NoImgAvatar";
import UserProfileImg from "../UserProfileImg/UserProfileImg";
import UserHeader from "../UserHeader/UserHeader";
import { ResponseProps } from "../../types/types";
import {
  UserContainer,
  HeaderDateContainer,
  DateParagraph,
  ResponseContent,
  ResponseParagraph,
} from "./Response.style";

const Response = ({ response }: ResponseProps) => {
  return (
    <UserContainer>
      {response.author.pic !== "" ? (
        <UserProfileImg
          imgId={response.author.pic}
          width={20}
          height={20}
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
        <ResponseContent>
          <ResponseParagraph>{response.content}</ResponseParagraph>
        </ResponseContent>
      </HeaderDateContainer>
    </UserContainer>
  );
};

export default Response;
