import { addCommentResponse } from "../../services/api/comments";
import { ICommentResponse, IUserDataState } from "../../interfaces/interfaces";

export const responsesVisibleHandler = (
  responsesVisible: boolean,
  setResponsesVisible: Function
): void => {
  setResponsesVisible(!responsesVisible);
};

export const publishResponse = async (
  e: React.SyntheticEvent,
  responseContent: string,
  loggedUserData: IUserDataState,
  commentId: string,
  formerResponses: Array<ICommentResponse> | Array<string>,
  setNewResponses: Function,
  responsesIds: Array<string>,
  setResponsesIds: Function
): Promise<void> => {
  e.preventDefault();
  if (responseContent === "") {
    alert("Your response is empty :/ Write something");
  }
  if (responseContent !== "") {
    const newResponses = [...formerResponses];
    const newResponsesIds = [...responsesIds];
    newResponses.push({
      author: {
        _id: loggedUserData._id,
        firstName: loggedUserData.firstName,
        lastName: loggedUserData.lastName,
        pic: loggedUserData.pic,
      },
      content: responseContent,
      created: String(new Date()),
      likes: [],
      _id: responseContent,
    });
    newResponsesIds.push(`${responseContent}`);
    setNewResponses(newResponses);
    setResponsesIds(newResponsesIds);
    await addCommentResponse(loggedUserData._id, responseContent, commentId);
  }
};

export const changeResponseValue = (
  e: React.SyntheticEvent,
  newResponseContent: Function
): void => {
  const target = e.currentTarget as HTMLTextAreaElement;
  newResponseContent(target.value);
};
