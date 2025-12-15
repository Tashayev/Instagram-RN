import { createSlice } from "@reduxjs/toolkit";
import * as reducers from "./reducers";
import { PostState } from "../types/PostTypes";

const initialState: PostState = {
  posts: [],
};

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers, // подключаем все редьюсеры из файла reducers.ts
});

export const postAction = postSlice.actions;
export default postSlice.reducer;
