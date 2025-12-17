import React, { useState } from 'react';
import { ScrollView, Pressable, Image, Text, View } from 'react-native';
import { styles } from './Stories.styles';
import AvaIcon from '@/widgets/ui/AvaIcon/AvaIcon';

import { findUsersById } from '@/shared/utils/filterUtils';
import { useStories } from '../model/useStories';
import useUsers from '@/features/users/model/useUsers';
import { AvaPlus } from '@/shared/icons/Icons';
const Stories = () => {
  const { users, currentUser, isCurrentUserHasStories } = useUsers();

  const { stories, isStoryViewedByCurrentUser, handleAddToViewedList } =
    useStories();

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.container}
    >
      <Pressable style={styles.item}>
        <View style={styles.imgWrapper}>
          {isCurrentUserHasStories ? (
            <AvaIcon
              size={93}
              viewed={true}
              avatar={currentUser.avatar}
            />
          ) : (
            <Image source={{ uri: currentUser.avatar }} style={styles.image} />
          )}
          <View style={styles.plusIconWrapper}>
            <AvaPlus />
          </View>
        </View>
        <Text style={styles.name}>Your Story</Text>
      </Pressable>
      {stories.map(story => {
        const user = findUsersById(users, story.userId);
        const viewer = {
          id: Date.now(),
          storyId: story.id,
          userId: currentUser.id,
          viewedAt: new Date().toISOString(),
        };
        console.log(isCurrentUserHasStories)
        return (
          <Pressable key={story.id} style={styles.item} onPress={() => handleAddToViewedList(viewer)}>
            <View style={styles.imgWrapper}>
              <AvaIcon
                size={93}
                avatar={user?.avatar}
                viewed={isStoryViewedByCurrentUser(story.id)}
                
              />
            </View>
            <Text style={styles.name}>{user?.username}</Text>
          </Pressable>
        );
      })}
    </ScrollView>
  );
};

export default Stories;
