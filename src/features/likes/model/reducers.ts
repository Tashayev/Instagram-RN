import { PayloadAction } from "@reduxjs/toolkit";
import { LikeState, LikeTypes } from "../types/LikesTypes";


export const setAllPostLikes = (state: LikeState, action:PayloadAction<LikeTypes[]>) => {
  state.postLikes = action.payload
}

export const setLike =(state:LikeState, action:PayloadAction<LikeTypes>)=>{
  state.postLikes.push(action.payload);
}