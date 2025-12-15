import React from 'react';
import { users,  postLikes, comments } from '../../../../data';
import Post from './Post';

import { ScrollView } from 'react-native';
import {
  findUsersById,
  getPostComment,
  getPostLikesInfo,
} from '@/shared/utils/filterUtils';
import { usePosts } from '../model/usePosts';

const Posts = () => {
  const currentUserId = 1;
  const { posts} = usePosts();
  return (
    <ScrollView>
      {posts.map(post => {
        const user = findUsersById(users, post.userId);
        const commentInfo = getPostComment(post.id, currentUserId, comments);
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
