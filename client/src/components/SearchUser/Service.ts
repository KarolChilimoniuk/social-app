import { IAppUsers } from "../../interfaces/interfaces";

export const formSubmitHandler = async (
  e: React.SyntheticEvent,
  setLoading: Function,
  formValue: string,
  appUsers: Array<IAppUsers>,
  setUsersToShow: Function
): Promise<void> => {
  e.preventDefault();
  setLoading(true);
  if (formValue !== "") {
    const filteredUsers = appUsers.filter((user: IAppUsers) => {
      if (
        user.firstName.toLowerCase().includes(formValue) ||
        user.lastName.toLowerCase().includes(formValue) ||
        user.userName.toLowerCase().includes(formValue)
      ) {
        return user;
      }
    });
    setUsersToShow(filteredUsers);
  }
  if (formValue === "") {
    setUsersToShow(appUsers);
  }
  setLoading(false);
};

export const changeHandler = (
  e: React.ChangeEvent,
  setFormValue: Function
): void => {
  const target = e.target as HTMLInputElement;
  setFormValue(target.value);
};
