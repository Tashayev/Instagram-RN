import React, { useState } from 'react';
import {
  ScrollView,
  Pressable,
  Image,
  Text,  
  View,
} from 'react-native';

import { GradientCircle } from '../../widgets/GradientCircle/GradientCircle';
import { styles } from './Stories.styles';

const userData = [
  {
    id: '1',
    name: 'user1',
    imageUrl:
      'https://img.freepik.com/premium-vector/person-with-blue-shirt-that-says-name-person_1029948-7040.jpg',
  },
  {
    id: '2',
    name: 'user2',
    imageUrl:
      'https://img.freepik.com/premium-vector/person-with-blue-shirt-that-says-name-person_1029948-7040.jpg',
  },
  {
    id: '4',
    name: 'user4',
    imageUrl:
      'https://img.freepik.com/premium-vector/person-with-blue-shirt-that-says-name-person_1029948-7040.jpg',
  },
  {
    id: '3',
    name: 'user3',
    imageUrl:
      'https://img.freepik.com/premium-vector/person-with-blue-shirt-that-says-name-person_1029948-7040.jpg',
  },
  {
    id: '5',
    name: 'user5',
    imageUrl:
      'https://img.freepik.com/premium-vector/person-with-blue-shirt-that-says-name-person_1029948-7040.jpg',
  },
];
const SIZE = 81;
const Stories = () => {
  const [viewed, setViewed] = useState<string[]>([]);
  const handlePress = (id: string) => {
    setViewed(prev => (prev.includes(id) ? prev : [...prev, id]));
  };
  return (
    <ScrollView horizontal={true} style={styles.container}>
      {userData.map(user => {
        const isSeen = viewed.includes(user.id);
        return (
          <Pressable
            key={user.id}
            style={styles.item}
            onPress={() => handlePress(user.id)}
          >
            <View style={styles.imgWrapper}>
              {!isSeen && <GradientCircle size={SIZE} />}
              <Image source={{ uri: user.imageUrl }} style={[styles.image]} />
            </View>
            <Text style={styles.name}>{user.name}</Text>
          </Pressable>
        );
      })}
    </ScrollView>
  );
};

export default Stories;

