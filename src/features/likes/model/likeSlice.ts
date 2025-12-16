import { createSlice } from "@reduxjs/toolkit";
import * as reducers from './reducers'

const initialState = {
  postLikes: []
}

export const likeSlice = createSlice({
  name: 'like',
  initialState,
  reducers
});

export const likeAction = likeSlice.actions;
export default likeSlice.reducer