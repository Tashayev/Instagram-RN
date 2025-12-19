import { View, Image, StyleSheet } from 'react-native';
import React from 'react';
import Video from 'react-native-video';
import useStories from '../../model/useStories';

const StoriesViewer = ({ route }: any) => {
  const { userId } = route.params;
  const { getStoryByUserId, getStoryContents } = useStories();

  const story = getStoryByUserId(userId);
  if (!story) return null;

  const contents = getStoryContents(story.id);

  return (
    <View style={styles.wrapper}>
      {contents.map(item => (
        <View key={item.id} style={styles.container}>
          {item.type === 'image' ? (
            <Image
              source={{ uri: item.url }}
              style={styles.media}
              resizeMode="cover"
            />
          ) : (
            <Video
              source={{ uri: item.url }}
              // style={styles.media}
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

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'black',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  media: {
    width: '100%',
    height: '100%',
  },
});

export default StoriesViewer;
