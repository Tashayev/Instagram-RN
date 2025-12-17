import { createSlice } from '@reduxjs/toolkit';
import * as reducers from './reducers';
import { UserType } from '../types/UserTypes';

const initialState = {
  users: [] as UserType[],
  authUser: {
    id: 1,
    username: 'mister',
    fullName: 'John Walker',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    bio: 'Traveler • Photographer • Coffee addict',
    website: 'https://johnwalker.dev',
    followers: 1023,
    following: 540,
    posts: 12,
    isVerified: true,
  },
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers,
});

export const userAction = userSlice.actions;
export default userSlice.reducer;
