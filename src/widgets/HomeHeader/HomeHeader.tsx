import { View, Text, Image, Pressable } from 'react-native';
import { Heart, Plus } from 'lucide-react-native';
import { styles } from './HomeHeader.styles';

import InstaText from '../InstaText/InstaText';
const HomeHeader = () => {
  return (
    <View style={styles.container}>
      <Pressable>
        <Plus size={27} />
      </Pressable>
      <InstaText />
      <Pressable>
        <Heart size={27} />
      </Pressable>
    </View>
  );
};
export default HomeHeader;
