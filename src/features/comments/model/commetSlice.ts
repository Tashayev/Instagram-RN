import { createSlice } from "@reduxjs/toolkit";
import * as reducers from './reducers'

const initialState = {
  postComments: []
}
export const commentSlice = createSlice({
  name:'comment',
  initialState,
  reducers
});
 
export const commentAction = commentSlice.actions;
export default commentSlice.reducer;