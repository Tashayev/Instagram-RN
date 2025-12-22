

  import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '@/app/store/store';

export const selectMarks = (state: RootState) => state.mark.marks;

export const selectCurrentUserMarks = createSelector(
  [(state: RootState) => state.mark.marks, (state: RootState) => state.user.authUser],
  (marks, authUser) => marks.filter(mark => mark.userId === authUser.id)
);
