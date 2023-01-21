import { IThoughtInPushMethod, IUser } from "./interfaces";
import { UserModel } from "../models/User";
import { ThoughtModel } from "../models/Thought";

// Sorting method for posts dates

const sortMethod = (
  dateA: IThoughtInPushMethod,
  dateB: IThoughtInPushMethod
) => {
  return dateB.created.getTime() - dateA.created.getTime();
};

// Fetch user list of friends

export const getUserFriends = async (user: IUser): Promise<Array<IUser>> => {
  let result: Array<IUser> = [];
  if (user.friendsList.length > 0) {
    result = await Promise.all(
      user.friendsList.map(async (id) => {
        try {
          return await UserModel.findOne({ _id: id }).exec();
        } catch (err) {
          console.log(err.message);
        }
      })
    );
  }
  console.log(result);
  return result;
};

// Fetch user posts

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
          console.log(err.message);
        }
      })
    );
  }
  return result;
};

// Fetch user friends posts

export const getFriendsPosts = async (
  listOfFriends: Array<IUser>
): Promise<Array<IThoughtInPushMethod>> => {
  let result: Array<IThoughtInPushMethod> = [];
  let postsIds: Array<string> = [];
  listOfFriends.forEach((el) => {
    postsIds = postsIds.concat(el.posts);
  });
  result = await Promise.all(
    postsIds.map(async (postId) => {
      try {
        const thought = await ThoughtModel.findOne({ _id: postId }).exec();
        if (thought) {
          const postAuthor = await UserModel.findOne({
            _id: thought.author._id,
          }).exec();
          return {
            _id: postId,
            textContent: thought.textContent,
            likes: thought.likes,
            comments: thought.comments,
            shares: thought.shares,
            created: thought.created,
            author: {
              _id: `${thought.author._id}`,
              firstName: postAuthor.firstName,
              lastName: postAuthor.lastName,
              pic: postAuthor.pic,
            },
          };
        }
      } catch (err) {
        console.log(err.message);
      }
    })
  );
  return result;
};

// Call above methods for set posts to show

export const getPostsToShow = async (
  listOfFriends: Array<IUser>,
  user: IUser
): Promise<Array<IThoughtInPushMethod>> => {
  let friendsPosts: Array<IThoughtInPushMethod> = [];
  let userPosts: Array<IThoughtInPushMethod> = [];
  let result: Array<IThoughtInPushMethod> = [];
  friendsPosts = await getFriendsPosts(listOfFriends);
  userPosts = await getUserPosts(user);
  result = userPosts.concat(friendsPosts).sort(sortMethod);
  return result;
};
