import { View, Image, StyleSheet } from 'react-native';
import React from 'react';
import Video from 'react-native-video';
import useStories from '../../model/useStories';
import { useNavigation } from '@react-navigation/native';
import { styles } from './StoriesContent.styles';

const StoriesViewer = ({ route }: any) => {
  const { userId } = route.params;
  const { getStoryByUserId, getStoryContents } = useStories();

  const story = getStoryByUserId(userId);
  if (!story) return null;

  const contents = getStoryContents(story.id);
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {contents.map(item => (
        <View key={item.id} style={styles.container}>
          {item.type === 'image' ? (
            <Image
              source={{ uri: item.url }}
              style={styles.image}
              resizeMode="cover"
            />
          ) : (
            <Video
              source={{ uri: item.url }}
              // style={styles.video}
              resizeMode="cover"
              repeat
              paused={false} 
            />
          )}
        </View>
      ))}
    </View>
  );
};



export default StoriesViewer;
