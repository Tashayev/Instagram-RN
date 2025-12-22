

export type PostTypes = {
  id: number;
  userId: number;
  media: Media[];
  description: string;
  location: string;
  likes: number;
  createdAt: string;
  taggedUsers: number[];
  isMarked?: boolean
};
export type PostState = {
  posts: PostTypes[]
}

type Media = {
  type: string;
  url: string;
};




