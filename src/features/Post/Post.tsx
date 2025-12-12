import { FlatList, Image, Pressable, Text, View } from 'react-native';
import { type PostTypes } from './components/PostTypes';
import AvaIcon from '@/widgets/ui/AvaIcon/AvaIcon';
import { styles } from './components/Post.styles';
import { Bookmark, EllipsisVertical, Heart, MessageCircle, Send } from 'lucide-react-native';
import Video from 'react-native-video';
import { BookmarkSolid, HeartSolid } from '@/shared/icons/Icons';

interface Prop {
  avatar: string | undefined;
  username: string | undefined;
  post: PostTypes;
}
const Post = (props: Prop) => {
  const { avatar, username, post } = props;
  const liked = true
  const marked = true
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.border} />
        <View style={styles.spaceBetween}>
          <View style={styles.left}>
            <AvaIcon avatar={avatar} size={33} viewed={false} />
            <View>
              <Text style={styles.username}>{username}</Text>
              <Text style={styles.location}>{post.location}</Text>
            </View>
          </View>
          <View>
            <Pressable>
              <EllipsisVertical />
            </Pressable>
          </View>
        </View>
        <View style={styles.content}>
          <FlatList
            data={post.media}
            horizontal
            pagingEnabled
            nestedScrollEnabled
            keyExtractor={(item, index) => index.toString()}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <View style={styles.media}>
                {item.url ? (
                  item.type === 'image' ? (
                    <Image
                      source={{ uri: item.url }}
                      style={styles.media}
                      resizeMode="cover"
                    />
                  ) : (
                    <Video
                      source={{ uri: item.url }}
                      style={styles.media}
                      resizeMode="cover"
                      repeat
                    />
                  )
                ) : (
                  <View
                    style={{
                      width: '100%',
                      height: '100%',
                      backgroundColor: '#eee',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <Text>No media</Text>
                  </View>
                )}
              </View>
            )}
          />
        </View>
        <View style={styles.spaceBetween}>
          <View style={styles.left}>
            <Pressable>{liked?<HeartSolid/>:<Heart />}</Pressable>
            <Pressable><MessageCircle /></Pressable>
            <Pressable><Send /></Pressable>
          </View>
          <View>
            <Pressable>{marked?<BookmarkSolid/> :<Bookmark />}</Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Post;
