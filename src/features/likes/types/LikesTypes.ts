export type LikeTypes = {
  id: number;
  targetId: number;
  userId: number | undefined;
  createdAt: number;
  targetType:string
};



export type LikeInfoTypes = {
  
  liked: boolean;
  likesCount: number;
};

export type LikeState = {
  postLikes: LikeTypes[]
}