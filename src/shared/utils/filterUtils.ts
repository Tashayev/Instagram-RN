import { PostCommentTypes } from '@/features/comments/types/CommentTypes';
import { LikeTypes } from '@/features/likes/types/LikesTypes';
import { PostTypes } from '@/features/posts/types/PostTypes';
import { UserType } from '@/features/users/types/UserTypes';

export const filterPostByUserId = (userId: number, posts: PostTypes[]) => {
  return posts.filter(post => post.userId === userId);
};

export const findUsersById = (users: UserType[], userId: number) => {
  return users.find(user => user.id === userId);
};

export const getPostLikesInfo = (
  targetId: number,
  currentUserId: number,
  postLikes: LikeTypes[],
) => {
  const likes = postLikes.filter(like => like.targetId === targetId);

  return {
    likes,
    likesCount: likes.length,
    liked: likes.some(like => like.userId === currentUserId),
  };
};

export const getPostComment = (
  targetId: number,
  currentUserId: number,
  comments: PostCommentTypes[],
) => {
  const postComments = comments.filter(
    comment => comment.targetId === targetId,
  );
  const filteredComentatorsById = postComments.filter(
    comment => comment.userId === currentUserId,
  );
  return {
    postComments,
    commentsCount: postComments.length,
    filteredComentatorsById,
  };
};
