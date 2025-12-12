export type User = {
  id: number;
  username: string;
  fullName: string;
  avatar: string;
  bio: string;
  website?: string | undefined;
  followers: number;
  following: number;
  posts: number;
  isVerified: boolean;
};

export type PostTypes = {
  id: number;
  userId: number;
  media: Media[];
  description: string;
  location: string;
  likes: number;
  createdAt: string;
  taggedUsers: number[];
};
type Commet = {
  username: string;
  comment: string;
  likes: number;
};
type Media = {
  type: string;
  url: string;
};

export type PostLikesTypes = {
  id: number;
  postId: number;
  userId: number | undefined;
  createdAt: number;
};

export type PostCommentTypes = {
  id: number;
  postId: number;
  userId: number;
  text: string;
  likes: number;
  createdAt: string;
  replyTo: null|number;
};
