import { configureStore } from '@reduxjs/toolkit';
import postReducer from '@/features/posts/model/postSlice';
import storyReducer from '@/features/stories/model/storySlice';
import userReducer from '@/features/users/model/userSlice';
import commentReducer from '@/features/comments/model/commetSlice';
import likeReducer from '@/features/likes/model/likeSlice';
import { ThunkAction } from '@reduxjs/toolkit';
import { Action } from 'redux';



export const store = configureStore({
  reducer: {
    post: postReducer,
    story: storyReducer,
    user: userReducer,
    comment: commentReducer,
    like: likeReducer,
  },
});
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action
>;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
