import { createSlice } from "@reduxjs/toolkit";
import * as reducers from './reducers'
import { LikeTypes } from "../types/LikesTypes";

const initialState = {
  postLikes: [] as LikeTypes[]
}

export const likeSlice = createSlice({
  name: 'like',
  initialState,
  reducers
});

export const likeAction = likeSlice.actions;
export default likeSlice.reducer