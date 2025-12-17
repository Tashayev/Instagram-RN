import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "@/app/store/store"



export const selectStoriesExceptCurrentUser = createSelector(
  [
    (state: RootState) => state.story.stories,
    (state: RootState) => state.user.authUser,
  ],
  (stories, currentUser) => {
    if (!currentUser) return stories;
    return stories.filter(story => story.userId !== currentUser.id);
  }
);
