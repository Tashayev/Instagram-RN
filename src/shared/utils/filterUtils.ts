import { PostTypes, User } from '@/features/Post/components/PostTypes';

export const filterPostByUserId = (userId: number, posts: PostTypes[]) => {
  return posts.filter(post => post.userId === userId);
};

export const findUsersById = (users: User[], userId: number) => {
  return users.find(user => user.id === userId)
};


