import React from 'react';
import { users } from '../../../data';
import { posts } from '../../../data';
import Post from '../Post/Post';

import { ScrollView, View } from 'react-native';
import { findUsersById } from '@/shared/utils/filterUtils';

const Posts = () => {
  return (
    <ScrollView>
      {posts.map(post => {
        const user = findUsersById(users, post.userId);
        return (
          <Post
            avatar={user?.avatar}
            username={user?.username}
            post={post}
            key={post.id}
          />
        );
      })}
    </ScrollView>
  );
};

export default Posts;
