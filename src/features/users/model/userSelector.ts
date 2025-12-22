import { createSelector } from '@reduxjs/toolkit'
import { RootState } from '@/app/store/store'

const selectUsers = (state: RootState) => state.user.users
const selectAuthUser = (state: RootState) => state.user.authUser

export const selectUsersExceptCurrent = createSelector(
  [selectUsers, selectAuthUser],
  (users, currentUser) => {
    if (!currentUser) return users
    return users.filter(user => user.id !== currentUser.id)
  }
);



export const selectCurrentUserMarks = createSelector(
  [(state: RootState) => state.mark.marks, (state: RootState) => state.user.authUser],
  (marks, authUser) => marks.filter(mark => mark.userId === authUser.id)
);

