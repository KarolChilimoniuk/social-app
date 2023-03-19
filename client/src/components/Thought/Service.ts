import { Dispatch } from "redux";
import {
  hideCommentsModalHandler,
  commentsModalLoadingStatus,
} from "../../actions/appDataAction";
import { fetchComments } from "../../services/api/comments";
export const commentsHandler = (dispatch: Dispatch, thoughtId: string) => {
  dispatch(commentsModalLoadingStatus(true));
  dispatch(hideCommentsModalHandler(false));
  fetchComments(thoughtId, dispatch);
};
