import { Dispatch } from "redux";

export const userThoughts = async (
  e: React.SyntheticEvent,
  thoughtContent: string,
  addThought: Function,
  eMail: string,
  dispatch: Dispatch
) => {
  e.preventDefault();
  if (thoughtContent === "") {
    alert("Your thought is empty :/ Write something.");
  }
  if (thoughtContent !== "") {
    await addThought(eMail, thoughtContent, dispatch);
  }
};

export const changeThoughtValue = async (
  e: React.SyntheticEvent,
  newThoughtContent: Function
) => {
  const target = e.currentTarget as HTMLTextAreaElement;
  newThoughtContent(target.value);
};
