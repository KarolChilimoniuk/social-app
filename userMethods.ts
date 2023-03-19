import {
  IComment,
  IThoughtInPushMethod,
  IUser,
  IThoughtCommentData,
} from "./interfaces";
import { UserModel } from "./models/User";
import { CommentModel } from "./models/Comment";
import { ThoughtModel } from "./models/Thought";

// Sorting method for posts dates

const sortMethodFromLast = (
  elA: IThoughtInPushMethod | IThoughtCommentData,
  elB: IThoughtInPushMethod | IThoughtCommentData
) => {
  return elB.created.getTime() - elA.created.getTime();
};

const sortMethodFromFirst = (
  elA: IThoughtInPushMethod | IThoughtCommentData,
  elB: IThoughtInPushMethod | IThoughtCommentData
) => {
  return elA.created.getTime() - elB.created.getTime();
};

// Fetch user list of followed

export const getUserFollowed = async (user: IUser): Promise<Array<any>> => {
  let result: Array<IUser> = [];
  if (user.followed.length > 0) {
    result = await Promise.all(
      user.followed.map(async (id) => {
        try {
          return await UserModel.findOne({ _id: id }).exec();
        } catch (err) {
          console.log(err.message);
        }
      })
    );
  }
  return result;
};

// Fetch user list of followers

export const getUserFollowers = async (user: IUser): Promise<Array<IUser>> => {
  let result: Array<IUser> = [];
  if (user.followers.length > 0) {
    result = await Promise.all(
      user.followers.map(async (id) => {
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
  return result.sort(sortMethodFromLast);
};

// Fetch user friends posts

export const getFollowedPosts = async (
  listOfFollowed: Array<IUser>
): Promise<Array<IThoughtInPushMethod>> => {
  let result: Array<IThoughtInPushMethod> = [];
  let postsIds: Array<string> = [];
  listOfFollowed.forEach((el) => {
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
  listOfFollowed: Array<IUser>,
  user: IUser
): Promise<Array<IThoughtInPushMethod>> => {
  let postsOfFollowed: Array<IThoughtInPushMethod> = await getFollowedPosts(
    listOfFollowed
  );
  let userPosts: Array<IThoughtInPushMethod> = await getUserPosts(user);
  let result: Array<IThoughtInPushMethod> = userPosts
    .concat(postsOfFollowed)
    .sort(sortMethodFromLast);
  return result;
};

// Get Comments

// export ons getResponses = async(responsesIds: Array<string): Promise<any> => {

// }
export const getComments = async (
  commentsIds: Array<string>
): Promise<Array<IThoughtCommentData>> => {
  let result: Array<IThoughtCommentData> = [];
  if (commentsIds.length > 0) {
    result = await Promise.all(
      commentsIds.map(async (id) => {
        try {
          const commentData: IComment = await CommentModel.findById(id).exec();
          const commentAuthor: IUser = await UserModel.findById(
            commentData.author._id
          ).exec();
          return {
            _id: commentData._id,
            author: {
              _id: `${commentAuthor._id}`,
              firstName: commentAuthor.firstName,
              lastName: commentAuthor.lastName,
              pic: commentAuthor.pic,
            },
            content: commentData.content,
            created: commentData.created,
            likes: commentData.likes,
          };
        } catch (err) {
          console.error(err.message);
        }
      })
    );
  }
  return result.sort(sortMethodFromFirst);
};
