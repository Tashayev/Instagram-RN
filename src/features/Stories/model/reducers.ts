import { PayloadAction } from '@reduxjs/toolkit';
import {
  StoriesState,
  StoryTypes,
  StoryViewedTypes,
} from '../types/StoriesTypes';

export const setAllStories = (
  state: StoriesState,
  action: PayloadAction<StoryTypes[]>,
) => {
  state.stories = action.payload;
};

export const addStory = (
  state: StoriesState,
  action: PayloadAction<StoryTypes>,
) => {
  if (!state.stories.find(story => story.id === action.payload.id)) {
    state.stories.push(action.payload);
  }
};
export const addCurrentUserToViwedList = (
  state: StoriesState,
  action: PayloadAction<StoryViewedTypes>,
) => {
  const story = state.stories.find(s => s.id === action.payload.id);
  if (!story) return;
  const alreadyViewed = story.viewedBy.some(
    view => view.userId === action.payload.userId,
  );
  if (!alreadyViewed) {
    story.viewedBy.push(action.payload);
  }
};
// export const markStoryViewed = (state: StoriesState, action: PayloadAction<number>) => {
//   const story = state.stories.find(story => story.id === action.payload);
//   if (story) story.viewed = true;
// };
