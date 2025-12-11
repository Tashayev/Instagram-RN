import { Image, Pressable } from 'react-native';
import { GradientCircle } from './components/GradientCircle/GradientCircle';
import { styles } from './components/AvaIcon.styles';
import { AvaIconTypes } from './components/AvaIcon.types';

const AvaIcon = ({avatar, size, viewed }: AvaIconTypes) => {
  const userAva = 'https://cdn-icons-png.flaticon.com/512/847/847969.png'
  const validAva = avatar ? avatar : userAva
  return (
    <Pressable >
      {!viewed && <GradientCircle size={size} />}
      <Image source={{ uri: validAva }} style={[styles.image]} width={size} height={size}/>
    </Pressable>
  );
};

export default AvaIcon;
