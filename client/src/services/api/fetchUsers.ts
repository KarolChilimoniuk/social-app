import { instance } from ".";
import { AxiosError, AxiosResponse } from "axios";
import { Dispatch } from "redux";
import { fetchAppUsers } from "../../actions/appDataAction";
import { IUserInfo } from "../../interfaces/interfaces";

export const fetchUsers = async (dispatch: Dispatch): Promise<any> => {
  await instance
    .get(`/`)
    .then((res: AxiosResponse) => {
      let result = res.data.users.map((user: IUserInfo) => {
        return {
          _id: user._id,
          firstName: user.firstName,
          lastName: user.lastName,
          userName: user.userName,
          pic: user.pic,
        };
      });
      dispatch(fetchAppUsers(result));
    })
    .catch((err: AxiosError) => {
      console.error(err.message);
    });
};
