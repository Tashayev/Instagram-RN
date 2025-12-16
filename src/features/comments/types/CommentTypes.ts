
export type PostCommentTypes = {
  id: number;
  targetId: number;
  userId: number;
  text: string;
  likes: number;
  createdAt: string;
  replyTo: null | number;
};

export type CommetInfoTypes = {
  postComments: PostCommentTypes[];
  commentsCount: number;
  filteredComentatorsById: PostCommentTypes[];
};

export type CommentState  = {
  postComments: PostCommentTypes[]
}
