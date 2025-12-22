import { PayloadAction } from "@reduxjs/toolkit";
import { MarkState, MarkTypes } from "../types/MarkTypes";

export const setMarks = (state:MarkState, actions:PayloadAction<MarkTypes[]>)=>{
  state.marks = actions.payload
}