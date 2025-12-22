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
  const { postComments } = useComments();
  const { getLikesInfo, handleLike } = useLikes();
  const { handleAddToViewedList } = useStories();

  const currentUserId = currentUser.id;

  return (
    <ScrollView>
      {posts.map(post => {
        const user = findUsersById(users, post.userId);

        // Комментарии через хук
        const commentInfo = getPostComment(post.id, currentUserId, postComments);

        // Лайки через хук
        const { liked, likesCount } = getLikesInfo(post.id);

        return (
          <Post
            key={post.id}
            avatar={user?.avatar}
            username={user?.username}
            post={post}
            commentInfo={commentInfo}
            liked={liked}          // boolean для UI
            likesCount={likesCount} // число лайков
            onLike={() => handleLike(post.id)}
            handleAddToViewedList={handleAddToViewedList}
          />
        );
      })}
    </ScrollView>
  );
};

export default Posts;
