
import { PayloadAction } from "@reduxjs/toolkit";
import { StoriesState, StoryTypes } from "../components/StoriesTypes";


export const setAllStories = (state: StoriesState, action: PayloadAction<StoryTypes[]>) => {
  state.stories = action.payload;
};

export const addStory = (state: StoriesState, action: PayloadAction<StoryTypes>) => {
  
  if (!state.stories.find(story => story.id === action.payload.id)) {
    state.stories.push(action.payload);
  }
};

// export const markStoryViewed = (state: StoriesState, action: PayloadAction<number>) => {
//   const story = state.stories.find(story => story.id === action.payload);
//   if (story) story.viewed = true;
// };
