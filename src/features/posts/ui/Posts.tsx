import React from 'react';
import { ScrollView } from 'react-native';
import Post from './Post';
import usePosts from '../model/usePosts';
import useUsers from '@/features/users/model/useUsers';
import useComments from '@/features/comments/model/useComments';
import useLikes from '@/features/likes/model/useLikes';
import useStories from '@/features/stories/model/useStories';
import { findUsersById, getPostComment } from '@/shared/utils/filterUtils';

const Posts = () => {
  const { users, currentUser } = useUsers();
  const { posts } = usePosts();
  const { handleLike } = useLikes();
  const { handleAddToViewedList } = useStories();

  return (
    <ScrollView>
      {posts.map(post => {
        const user = findUsersById(users, post.userId);

        return (
          <Post
            key={post.id}
            avatar={user?.avatar}
            username={user?.username}
            userId={user?.id}
            post={post}
            onLike={() => handleLike(post.id)}
            isMarked={post.isMarked}
            handleAddToViewedList={handleAddToViewedList}
            currentUserId={currentUser.id}
          />
        );
      })}
    </ScrollView>
  );
};

export default Posts;
