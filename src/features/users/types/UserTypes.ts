export type UserType = {
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

export type UserState = {
  users: UserType[] 
}