import { IThought, IThoughtInPushMethod, IUser } from "./interfaces";
import { UserModel } from "../models/User";
import { ThoughtModel } from "../models/Thought";

export const getUserFriends = async (user: IUser): Promise<Array<IUser>> => {
  let result: Array<IUser> = [];
  if (user.friendsList.length > 0) {
    result = await Promise.all(
      user.friendsList.map(async (id) => {
        try {
          return await UserModel.findOne({ _id: id }).exec();
        } catch (err) {
          console.log(err.message, 1);
        }
      })
    );
  }
  console.log(result);
  return result;
};

export const getUserPosts = async (
  user: IUser
): Promise<Array<IThoughtInPushMethod>> => {
  let result: Array<IThoughtInPushMethod> = [];
  if (user.posts.length > 0) {
    result = await Promise.all(
      user.posts.map(async (postId) => {
        try {
          const thought = await ThoughtModel.findOne({ _id: postId }).exec();
          if (thought) {
            return {
              _id: postId,
              textContent: thought.textContent,
              likes: thought.likes,
              comments: thought.comments,
              shares: thought.shares,
              created: thought.created,
              author: {
                _id: `${user._id}`,
                firstName: user.firstName,
                lastName: user.lastName,
                pic: user.pic,
              },
            };
          }
        } catch (err) {
          console.log(err.message, 2);
        }
      })
    );
  }
  return result;
};

export const getFriendsPosts = async (
  listOfFriends: Array<IUser>
): Promise<Array<IThoughtInPushMethod>> => {
  let result: Array<IThoughtInPushMethod> = [];
  if (listOfFriends.length > 0) {
    result = await Promise.all(
      listOfFriends.map(async (el) => {
        let friendsPosts: Array<IThoughtInPushMethod> = [];
        el.posts.forEach(async (post) => {
          try {
            const thought = await ThoughtModel.findOne({ _id: post }).exec();
            if (thought) {
              friendsPosts.push({
                _id: post,
                textContent: thought.textContent,
                likes: thought.likes,
                comments: thought.comments,
                shares: thought.shares,
                created: thought.created,
                author: {
                  _id: `${el._id}`,
                  firstName: el.firstName,
                  lastName: el.lastName,
                  pic: el.pic,
                },
              });
            }
            return friendsPosts;
          } catch (err) {
            console.log(err.message, 3);
          }
        });
      })
    );
  }
  return result;
};

export const getPostsToShow = async (
  listOfFriends: Array<IUser>,
  user: IUser
): Promise<Array<IThoughtInPushMethod>> => {
  let friendsPosts: Array<IThoughtInPushMethod> = [];
  let userPosts: Array<IThoughtInPushMethod> = [];
  let result: Array<IThoughtInPushMethod> = [];
  friendsPosts = await getFriendsPosts(listOfFriends);
  userPosts = await getUserPosts(user);
  result = userPosts.concat(friendsPosts);
  return result;

  // if (listOfFriends.length > 0) {
  //   listOfFriends.forEach(async (el) => {
  //     el.posts.forEach(async (post) => {
  //       try {
  //         const thought = await ThoughtModel.findOne({ _id: post }).exec();
  //         if (thought) {
  //           result.push({
  //             _id: post,
  //             textContent: thought.textContent,
  //             likes: thought.likes,
  //             comments: thought.comments,
  //             shares: thought.shares,
  //             created: thought.created,
  //             author: {
  //               firstName: el.firstName,
  //               lastName: el.lastName,
  //               pic: el.pic,
  //             },
  //           });
  //         }
  //       } catch (err) {
  //         console.log(err.message);
  //       }
  //     });
  //   });
  // }
  // if (user.posts.length > 0) {
  //   user.posts.forEach(async (postId) => {
  //     try {
  //       const thought = await ThoughtModel.findOne({ _id: postId }).exec();
  //       if (thought) {
  //         result.push({
  //           _id: postId,
  //           textContent: thought.textContent,
  //           likes: thought.likes,
  //           comments: thought.comments,
  //           shares: thought.shares,
  //           created: thought.created,
  //           author: {
  //             firstName: user.firstName,
  //             lastName: user.lastName,
  //             pic: user.pic,
  //           },
  //         });
  //       }
  //     } catch (err) {
  //       console.log(err.message);
  //     }
  //   });
  // }
  // return result
};
