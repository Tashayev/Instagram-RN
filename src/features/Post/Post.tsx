import { FlatList, Image, Pressable, Text, View } from 'react-native';
import { PostCommentTypes, PostLikesTypes, type PostTypes } from './components/PostTypes';
import AvaIcon from '@/widgets/ui/AvaIcon/AvaIcon';
import { styles } from './components/Post.styles';
import {
  Bookmark,
  EllipsisVertical,
  Heart,
  MessageCircle,
  Send,
} from 'lucide-react-native';
import Video from 'react-native-video';
import { BookmarkSolid, HeartSolid } from '@/shared/icons/Icons';

import { getPostComment, getPostLikesInfo } from '@/shared/utils/filterUtils';

interface Prop {
  avatar: string | undefined;
  username: string | undefined;
  post: PostTypes;
  userId: number | undefined;
  postLikes: PostLikesTypes[];
  comments: PostCommentTypes[]
}
const Post = (props: Prop) => {
  const { avatar, username, post, userId, postLikes, comments } = props;
 const currentUserId = userId ? userId : 0
  const marked = true;
  const { likes, likesCount, liked } = getPostLikesInfo(post.id, currentUserId, postLikes);
  const { commentsCount, currentUserComment, postComment} = getPostComment(post.id, currentUserId, comments)
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
            <Pressable style={styles.btn}>
              {liked ? <HeartSolid /> : <Heart />}
              <Text>{likesCount}</Text>
            </Pressable>
            <Pressable style={styles.btn}>
              <MessageCircle />
              <Text>{commentsCount}</Text>
            </Pressable>
            <Pressable>
              <Send />
            </Pressable>
          </View>
          <View>
            <Pressable>{marked ? <BookmarkSolid /> : <Bookmark />}</Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Post;
