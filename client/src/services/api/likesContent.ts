import { instance } from ".";
import { AxiosError, AxiosResponse } from "axios";

export const addLike = async (id: string, thoughtId: string): Promise<any> => {
  await instance
    .patch("/logged/addLike", { userId: id, thoughtId: thoughtId })
    .then((res: AxiosResponse) => {
      console.log("Like added");
    })
    .catch((err: AxiosError) => {
      console.error("Like can't be added :(");
    });
};

export const removeLike = async (
  id: string,
  thoughtId: string
): Promise<any> => {
  await instance
    .patch("/logged/removeLike", { userId: id, thoughtId: thoughtId })
    .then((res: AxiosResponse) => {
      console.log("Like removed");
    })
    .catch((err: AxiosError) => {
      console.error("Like can't be removed :(");
    });
};
