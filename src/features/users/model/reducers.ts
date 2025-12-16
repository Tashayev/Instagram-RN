import { PayloadAction } from '@reduxjs/toolkit';
import { UserState, UserType } from '../types/UserTypes';

export const setAllUsers = (
  state: UserState,
  action: PayloadAction<UserType[]>,
) => {
  state.users = action.payload;
};

