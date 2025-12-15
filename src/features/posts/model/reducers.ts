import { PayloadAction } from "@reduxjs/toolkit";
import { PostState, PostTypes } from "../types/PostTypes";

export const setAllPosts = (state: PostState, action: PayloadAction<PostTypes[]>) => {
  state.posts = action.payload;
};
