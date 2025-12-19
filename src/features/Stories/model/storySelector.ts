import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '@/app/store/store';

export const selectStoriesWithContent = createSelector(
  [(state: RootState) => state.story.stories, (state: RootState) => state.story.storiesContents],
  (stories, contents) => {
    const idsMap = new Map(contents.map(c => [c.storyId, true]));
    return stories.filter(story => idsMap.has(story.id));
  }
);

export const selectStoryContentsByStoryId = (storyId: number) =>
  createSelector(
    (state: RootState) => state.story.storiesContents,
    (contents) => contents.filter(s => s.storyId === storyId)
  );

  export const selectStoryByUserId = (userId: number) => (state: RootState) =>
  state.story.stories.find(story => story.userId === userId);

  