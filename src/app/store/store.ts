import {configureStore} from '@reduxjs/toolkit'
import postReducer from '@/features/posts/model/postSlice';
import storyReducer from '@/features/Stories/model/storySlice'

export const store = configureStore({
  reducer: {
    post: postReducer,
    story: storyReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch