import { createSlice } from "@reduxjs/toolkit";
import * as reducers from './reducers'


const initialState = {
  users: [],

}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers
});


export const userAction = userSlice.actions;
export default userSlice.reducer;