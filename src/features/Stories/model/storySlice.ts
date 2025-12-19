import { createSlice } from "@reduxjs/toolkit";
import * as reducers from "./reducers";
import { StoriesState } from "../types/StoriesTypes";


const initialState: StoriesState = {
  stories: [],
  storiesContents: []
};

export const storySlice = createSlice({
  name: "story",
  initialState,
  reducers,
});

export const storyAction = storySlice.actions;
export default storySlice.reducer;
