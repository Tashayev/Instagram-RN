import React, { useState } from 'react';
import { ScrollView, Pressable, Image, Text, View } from 'react-native';
import { styles } from './components/Stories.styles';
import AvaIcon from '@/widgets/ui/AvaIcon/AvaIcon';
import {  users } from './../../../data';
import { findUsersById } from '@/shared/utils/filterUtils';
import { useStories } from './model/useStories';
const Stories = () => {
  //const [localStories, setLocalStories] = useState(stories);

  // const handlePress = (id: number) => {
  //   setLocalStories(prev =>
  //     prev.map(u =>
  //       u.id === id
  //         ? {
  //             ...u,
  //             stories: {
  //               ...u.stories,
  //               viewed: true,
  //             },
  //           }
  //         : u,
  //     ),
  //   );
  //   //markStoryAsViewed(id);
  // };
  const {stories} =useStories();
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.container}
    >
      {stories.map(story => {
        const user = findUsersById(users, story.userId)
        return (
          <Pressable key={story.id} style={styles.item}>
            <View style={styles.imgWrapper}>
              <AvaIcon
                size={81}
                avatar={user?.avatar}
                viewed={false}
                // onPress={() => handlePress(user.id)}
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
