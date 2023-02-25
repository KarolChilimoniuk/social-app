import { instance } from ".";

export const follow = async (followerId: string, followedId: string) => {
  await instance
    .patch("/logged/follow", { followerId, followedId })
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));
};

export const unFollow = async (followerId: string, followedId: string) => {
  await instance
    .patch("/logged/unfollow", { followerId, followedId })
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));
};
