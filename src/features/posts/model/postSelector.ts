import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "@/app/store/store"


export const selectPostsExceptCurrentUser = (userId: number) =>
  createSelector(
    [(state: RootState) => state.post.posts],
    posts => posts.filter(post => post.userId !== userId)
  );
