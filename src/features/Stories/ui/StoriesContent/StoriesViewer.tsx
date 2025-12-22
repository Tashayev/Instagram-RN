import {
  View,
  Image,
  StatusBar,
  TextInput,
  Pressable,
} from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import Video from 'react-native-video';
import useStories from '../../model/useStories';
import { useNavigation } from '@react-navigation/native';
import { styles } from './StoriesContent.styles';
import { Heart, Send } from 'lucide-react-native';
import { StoriesProgressBar } from '@/shared/animations/ProgressBar';

const StoriesViewer = ({ route }: any) => {
  const { userId } = route.params;
  const { getStoryByUserId, getStoryContents } = useStories();
  const story = getStoryByUserId(userId);
  if (!story) return null;

  const contents = getStoryContents(story.id);
  const navigation = useNavigation();

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (contents.length === 0) return;

    const duration = contents[currentIndex].duration;

    const timer = setTimeout(() => {
      if (currentIndex < contents.length - 1) {
        setCurrentIndex(currentIndex + 1);
      } else {
        navigation.goBack();
      }
    }, duration);

    return () => clearTimeout(timer);
  }, [currentIndex, contents, navigation]);

  const currentItem = contents[currentIndex];

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      <View style={styles.wrapper}>
        <StoriesProgressBar
          count={contents.length}
          currentIndex={currentIndex}
          duration={currentItem.duration}
          isPaused={false}
        />

        {currentItem.type === 'image' ? (
          <Image
            source={{ uri: currentItem.url }}
            style={styles.image}
            resizeMode="cover"
          />
        ) : (
          <Video
            source={{ uri: currentItem.url }}
            style={styles.video}
            resizeMode="cover"
            repeat
            paused={false}
          />
        )}
        <View style={styles.actions}>
          <TextInput
            style={styles.input}
            placeholder="Send message"
            placeholderTextColor="#aaa"
          />
          <Pressable>
            <Heart color={'#fff'} />
          </Pressable>
          <Pressable>
            <Send color={'#fff'} />
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default StoriesViewer;
