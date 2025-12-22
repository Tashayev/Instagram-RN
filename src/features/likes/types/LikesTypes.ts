export type LikeTypes = {
  id: number;
  targetId: number;
  userId: number | undefined;
  createdAt: number;
  targetType:'post'
};



export type LikeInfoTypes = {
  likes: LikeTypes[];
  liked: boolean;
  likesCount: number;
};

export type LikeState = {
  postLikes: LikeTypes[]
}