
import { PayloadAction } from "@reduxjs/toolkit";
import { CommentState, PostCommentTypes } from "../types/CommentTypes";

export const setPostComments = (state: CommentState, action: PayloadAction<PostCommentTypes[]>) => {
  state.postComments = action.payload;
}