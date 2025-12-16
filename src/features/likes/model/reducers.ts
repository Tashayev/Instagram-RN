import { PayloadAction } from "@reduxjs/toolkit";
import { LikeState, LikeTypes } from "../types/LikesTypes";


export const setPostLikes = (state: LikeState, action:PayloadAction<LikeTypes[]>) => {
  state.postLikes = action.payload
}