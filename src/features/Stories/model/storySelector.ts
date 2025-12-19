import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '@/app/store/store';

export const selectStoriesWithContent = createSelector(
  [
    (state: RootState) => state.story.stories,
    (state: RootState) => state.story.storiesContents,
  ],
  (stories, contents) => {
    const storyIdsWithContent = new Set(contents.map(c => c.storyId));
    return stories.filter(story => storyIdsWithContent.has(story.id));
  }
);


export const selectStoryContentsByStoryId = (storyId: number) =>
  createSelector(
    (state: RootState) => state.story.storiesContents,
    (contents) => contents.filter(s => s.storyId === storyId)
  );

  export const selectStoryByUserId = (userId: number) => (state: RootState) =>
  state.story.stories.find(story => story.userId === userId);

  