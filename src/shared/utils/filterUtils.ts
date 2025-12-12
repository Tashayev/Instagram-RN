import { PostCommentTypes, PostLikesTypes, PostTypes, User } from '@/features/Post/components/PostTypes';

export const filterPostByUserId = (userId: number, posts: PostTypes[]) => {
  return posts.filter(post => post.userId === userId);
};

export const findUsersById = (users: User[], userId: number) => {
  return users.find(user => user.id === userId)
};

export const getPostLikesInfo = (
  postId: number,
  currentUserId: number,
  postLikes: PostLikesTypes[]
) => {
  const likes = postLikes.filter(like => like.postId === postId);

  return {
    likes,
    likesCount: likes.length,
    liked: likes.some(like => like.userId === currentUserId),
  };
};

export const getPostComment = (postId: number, currentUserId: number, comments: PostCommentTypes[]) => {
  const postComment = comments.filter(comment => comment.postId === postId);
  return {
    postComment,
    commentsCount: postComment.length,
    currentUserComment: postComment.filter(comment => comment.userId === currentUserId)
  }
}
