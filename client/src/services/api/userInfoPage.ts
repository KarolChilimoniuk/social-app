import { instance } from ".";
import { AxiosError, AxiosResponse } from "axios";

export const fetchFilteredUser = async (id: string): Promise<any> => {
  try {
    let result;
    await instance
      .get(`/${id}`)
      .then((res: AxiosResponse) => {
        result = res.data.userData;
      })
      .catch((err: AxiosError) => {
        result = err.message;
      });
    return result;
  } catch (err) {
    console.error("Request can't be executed");
  }
};
