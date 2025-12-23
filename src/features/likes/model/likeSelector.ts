import { RootState } from '@/app/store/store';
import { createSelector } from '@reduxjs/toolkit';

export const selectLikesInfo = (postId: number) =>
  createSelector(
    [
      (state: RootState) => state.like.postLikes,
      (state: RootState) => state.user.authUser,
    ],
    (likes, user) => {
      const likeOfPost = likes.filter(like => like.targetId === postId);
      return {
        likesCount: likeOfPost.length,
        liked: likeOfPost.some(like => like.userId === user.id),
      };
    },
  );
