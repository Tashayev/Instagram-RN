import { createSlice } from "@reduxjs/toolkit";
import * as reducers from './reducers'
import { PostCommentTypes } from "../types/CommentTypes";

const initialState = {
  postComments: [] as PostCommentTypes[]
}
export const commentSlice = createSlice({
  name:'comment',
  initialState,
  reducers
});
 
export const commentAction = commentSlice.actions;
export default commentSlice.reducer;