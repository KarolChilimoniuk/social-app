import { addComment } from "../../services/api/comments";
import {
  IPostWithCommentsContent,
  IUserDataState,
} from "../../interfaces/interfaces";

export const publishComment = async (
  e: React.SyntheticEvent,
  commentContent: string,
  loggedUserData: IUserDataState,
  thoughtId: string,
  setModalContent: Function,
  formerModalContent: IPostWithCommentsContent
): Promise<void> => {
  e.preventDefault();
  if (commentContent === "") {
    alert("Your comment is empty :/ Write something");
  }
  if (commentContent !== "") {
    const newComments = [...formerModalContent.comments];
    newComments.push({
      author: {
        _id: loggedUserData._id,
        firstName: loggedUserData.firstName,
        lastName: loggedUserData.lastName,
        pic: loggedUserData.pic,
      },
      content: commentContent,
      created: String(new Date()),
      likes: [],
      responses: [],
      _id: commentContent,
    });
    setModalContent({ ...formerModalContent, comments: newComments });
    await addComment(loggedUserData._id, commentContent, thoughtId);
  }
};

export const changeCommentValue = (
  e: React.SyntheticEvent,
  newCommentContent: Function
): void => {
  const target = e.currentTarget as HTMLTextAreaElement;
  newCommentContent(target.value);
};
