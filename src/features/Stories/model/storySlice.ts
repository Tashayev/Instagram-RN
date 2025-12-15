import { createSlice } from "@reduxjs/toolkit";

import * as reducers from "./reducers";
import { StoriesState } from "../components/StoriesTypes";

const initialState: StoriesState = {
  stories: [],
};

export const storySlice = createSlice({
  name: "story",
  initialState,
  reducers,
});

export const storyAction = storySlice.actions;
export default storySlice.reducer;
