import { RootState } from "@/app/store/store"
import { selectCurrentUserMarks } from "@/features/users/model/userSelector";
import { createSelector } from "@reduxjs/toolkit";

export const selectAllPosts = (state: RootState) => state.post.posts;

export const selectIsPostMarked = (postId: number) =>
  createSelector(selectCurrentUserMarks, (marks) =>
    marks.some(mark => mark.targetId === postId)
  );
