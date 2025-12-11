import { Text, View } from 'react-native';
import { type PostTypes} from './components/PostTypes';
import AvaIcon from '@/widgets/ui/AvaIcon/AvaIcon';

interface Prop {
  avatar: string | undefined;
  username: string | undefined;
  post: PostTypes
}
const Post = (props: Prop) => {
  const {avatar, username, post, } = props
  
 
  return (
    <View>
      <View style={{justifyContent:'space-between'}}>
        <View style={{gap:5, flexDirection:"row", }}>
          <AvaIcon avatar={avatar} size={33}  viewed={false} />
          <View>
            <Text>{username}</Text> 
            <Text>{post.location}</Text>
          </View>
        </View>
        <View ></View>
      </View>
    </View>
  );
};

export default Post;
