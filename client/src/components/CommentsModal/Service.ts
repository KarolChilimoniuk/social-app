import { Dispatch } from "redux";
import { addComment } from "../../services/api/comments";

export const publishComment = async (
  e: React.SyntheticEvent,
  commentContent: string,
  userId: string,
  thoughtId: string
  //   dispatch: Dispatch
) => {
  e.preventDefault();
  if (commentContent === "") {
    alert("Your comment is empty :/ Write something");
  }
  if (commentContent !== "") {
    await addComment(userId, commentContent, thoughtId);
  }
};

export const changeCommentValue = (
  e: React.SyntheticEvent,
  newCommentContent: Function
): void => {
  const target = e.currentTarget as HTMLTextAreaElement;
  newCommentContent(target.value);
};
