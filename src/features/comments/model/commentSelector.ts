import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '@/app/store/store';


export const selectPostComment = (targetId: number, currentUserId: number) =>
  createSelector(
    [(state: RootState) => state.comment.postComments],
    postComments => {
      const filtered = postComments.filter(c => c.targetId === targetId);
      return {
        postComments: filtered,
        commentsCount: filtered.length,
        filteredComentatorsById: filtered.filter(c => c.userId === currentUserId),
      };
    }
  );

