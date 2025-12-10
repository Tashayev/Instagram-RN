import React, { useState } from 'react';
import { ScrollView, Pressable, Image, Text, View } from 'react-native';
import { styles } from './components/Stories.styles';
import { StoriesTypes } from './components/StoriesTypes';
import AvaIcon from '@/widgets/ui/AvaIcon/AvaIcon';

const Stories = ({ stories, size }: StoriesTypes) => {
  const [localStories, setLocalStories] = useState(stories);

  const handlePress = (id: number) => {
    setLocalStories(prev =>
      prev.map(u => (u.id === id ? { ...u, viewed: true } : u)),
    );
    //markStoryAsViewed(id);
  };
  console.log(localStories)
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.container}
    >
      {localStories.map(user => {
        return (
          <Pressable key={user.id} style={styles.item}>
            <View style={styles.imgWrapper}>
              <AvaIcon
                size={size}
                avatar={user.avatar}
                viewed={user.viewed}
                onPress={() => handlePress(user.id)}
                
              />
            </View>
            <Text style={styles.name}>{user.name}</Text>
          </Pressable>
        );
      })}
    </ScrollView>
  );
};

export default Stories;
