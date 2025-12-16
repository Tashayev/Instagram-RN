import React from 'react';
import Post from './Post';

import { ScrollView } from 'react-native';
import {
  findUsersById,
  getPostComment,
  getPostLikesInfo,
} from '@/shared/utils/filterUtils';
import { usePosts } from '../model/usePosts';
import useUsers from '@/features/users/model/useUsers';
import useComments from '@/features/comments/model/useComments';
import useLikes from '@/features/likes/model/useLikes';

const Posts = () => {
  const { users } = useUsers();
  const currentUserId = 1;
  const { posts } = usePosts();
  const { postComments } = useComments();
  const { postLikes } = useLikes();
  return (
    <ScrollView>
      {posts.map(post => {
        const user = findUsersById(users, post.userId);
        const commentInfo = getPostComment(
          post.id,
          currentUserId, 
          postComments, 
        );
        const likeInfo = getPostLikesInfo(post.id, currentUserId, postLikes);
         
        return (
          <Post
            avatar={user?.avatar}
            username={user?.username}
            post={post}
            key={post.id}
            likeInfo={likeInfo}
            commentInfo={commentInfo}
          />
        );
      })}
    </ScrollView>
  );
};

export default Posts;
