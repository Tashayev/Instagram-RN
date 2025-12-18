import { AppThunk } from "@/app/store/store";
import { storyAction } from "../storySlice";


export const markStoryViewedThunk =
  (storyId: number): AppThunk =>
  (dispatch, getState) => {
    const state = getState();
    const currentUser = state.user.authUser;

    if (!currentUser) return;

    dispatch(
      storyAction.addCurrentUserToViwedList({
        id: Date.now(),
        storyId,
        userId: currentUser.id,
        viewedAt: new Date().toISOString(),
      })
    );
  };
