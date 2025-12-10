import { Image, Pressable } from 'react-native';
import { GradientCircle } from './components/GradientCircle/GradientCircle';
import { styles } from './components/AvaIcon.styles';
import { AvaIconTypes } from './components/AvaIcon.types';

const AvaIcon = ({avatar, size, viewed, onPress }: AvaIconTypes) => {
  return (
    <Pressable onPress={onPress}>
      {!viewed && <GradientCircle size={size} />}
      <Image source={{ uri:avatar }} style={[styles.image]} />
    </Pressable>
  );
};

export default AvaIcon;
