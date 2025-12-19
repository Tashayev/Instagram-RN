import { FlatList, Image, Pressable, Text, View } from 'react-native';
import {
  
  type PostTypes,
} from '../types/PostTypes';
import AvaIcon from '@/widgets/ui/AvaIcon/AvaIcon';
import { styles } from './Post.styles';
import {
  Bookmark,
  EllipsisVertical,
  Heart,
  MessageCircle,
  Send,
} from 'lucide-react-native';
import Video from 'react-native-video';
import { BookmarkSolid, HeartSolid } from '@/shared/icons/Icons';
import { CommetInfoTypes } from '@/features/comments/types/CommentTypes';
import { LikeInfoTypes } from '@/features/likes/types/LikesTypes';


interface Prop {
  avatar: string | undefined;
  username: string | undefined;
  post: PostTypes;
  likeInfo: LikeInfoTypes;
  commentInfo: CommetInfoTypes;
  handleAddToViewedList: (storyId: number) => void
}
const Post = (props: Prop) => {
  const { avatar, username, post, likeInfo, commentInfo, handleAddToViewedList } = props;

  const marked = true;
  const { liked, likesCount } = likeInfo;
  const { postComments, commentsCount, filteredComentatorsById } = commentInfo;
  // const commentator = (id: number) => {
  //   const currentCommentatorId = filteredComentatorsById.find(c => c.id === id);
    
  // };
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.border} />
        <View style={styles.spaceBetween}>
          <View style={styles.left}>
            <Pressable  >
            <AvaIcon avatar={avatar} size={33} viewed={false} /></Pressable>
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
                  <View style={styles.noMedia}>
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
        {postComments.map(c => (
          <View style={styles.comments} key={c.id}>
            <Text style={styles.username2}></Text>
            <Text>{c.text}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default Post;
