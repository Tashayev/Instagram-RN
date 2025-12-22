import { useDispatch } from "@/shared/utils/hooks/useDispach";
import { useSelector } from "@/shared/utils/hooks/useSelector";
import { useEffect } from "react";
import { likeAction } from "./likeSlice";
import { postLikes as initialLikes } from "../../../../data";

const useLikes = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(state => state.user.authUser);
  const allLikes = useSelector(state => state.like.postLikes);

  // Подсчёт для каждого поста
  const getLikesInfo = (postId: number) => {
    const postLikes = allLikes.filter(like => like.targetId === postId);
    const liked = postLikes.some(like => like.userId === currentUser.id);
    return {
      liked,
      likesCount: postLikes.length
    };
  };

  const handleLike = (postId: number) => {
    dispatch(likeAction.setLike({
      id: Number(new Date()),
      targetId: postId,
      userId: currentUser.id,
      createdAt: Number(new Date()),
      targetType: "post"
    }));
  };

  useEffect(() => {
    if (allLikes.length === 0) {
      dispatch(likeAction.setAllPostLikes(initialLikes));
    }
  }, []);

  return {
    getLikesInfo,
    handleLike
  };
};

export default useLikes;
