import { createSlice } from '@reduxjs/toolkit';
import { MarkTypes } from '../types/MarkTypes';
import * as reducers from './reducers';

const initialState = {
  marks: [] as MarkTypes[],
};

export const markSlice = createSlice({
  name: 'mark',
  initialState,
  reducers,
});

export const markAction = markSlice.actions;
export default markSlice.reducer;
