import { FlatList, Image, Pressable, Text, View } from 'react-native';
import { type PostTypes } from '../types/PostTypes';
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
import { useSelector } from '@/shared/utils/hooks/useSelector';
import { selectPostComment } from '@/features/comments/model/commentSelector';
import { selectLikesInfo } from '@/features/likes/model/likeSelector';
import { selectStoryByUserId } from '@/features/stories/model/storySelector';

interface Prop {
  avatar: string | undefined;
  username: string | undefined;
  post: PostTypes;
  userId: number | undefined;
  currentUserId: number;
  handleAddToViewedList: (storyId: number) => void;
  onLike: (postId: number) => void;
  isMarked: boolean;
}
const Post = (props: Prop) => {
  const {
    avatar,
    username,
    post,
    handleAddToViewedList,
    isMarked,
    onLike,
    currentUserId,
    userId,
  } = props;
  const likeInfo = useSelector(selectLikesInfo(post.id));
  const commentInfo = useSelector(selectPostComment(post.id, currentUserId));
  if (!userId) return null;
  const story = useSelector(selectStoryByUserId(userId));
  if(!story)return null
  const { liked, likesCount } = likeInfo;
  const { postComments, commentsCount, filteredComentatorsById } = commentInfo;

  return (
    <View>
      <View style={styles.container}>
        <View style={styles.border} />
        <View style={styles.spaceBetween}>
          <View style={styles.left}>
            <Pressable onPress={() => handleAddToViewedList(story.id)}>
              <AvaIcon avatar={avatar} size={33} viewed={false} />
            </Pressable>
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
            <Pressable style={styles.btn} onPress={() => onLike(post.id)}>
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
            <Pressable>{isMarked ? <BookmarkSolid /> : <Bookmark />}</Pressable>
          </View>
        </View>
        {commentInfo.postComments.map(c => {
          return (
            <View style={styles.comments} key={c.id}>
              <Text style={styles.username2}>{c.username}</Text>
              <Text>{c.text}</Text>
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default Post;
