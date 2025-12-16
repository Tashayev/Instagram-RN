import { View, Text, Image, Pressable } from 'react-native';
import { Heart, Plus } from 'lucide-react-native';
import { styles } from './HomeHeader.styles';
import { InstaText } from '@/shared/icons/Icons';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import AddTab from '@/screens/AddTabScreen/AddTab';




const HomeHeader = (props: NativeStackHeaderProps) => {
  const { navigation, route, back } = props;
  return (
    <View style={styles.container}>
      <Pressable onPress={()=>navigation.navigate(route.name)}>
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
