import { useDispatch } from '@/shared/utils/hooks/useDispach';
import { useSelector } from '@/shared/utils/hooks/useSelector';
import { useEffect } from 'react';
import { likeAction } from './likeSlice';
import { postLikes as initialLikes } from '../../../../data';
import { selectLikesInfo } from './likeSelector';

const useLikes = () => {
  const dispatch = useDispatch();

  const handleLike = (postId: number) => {
    dispatch(
      likeAction.setLike({
        id: Date.now(),
        targetId: postId,
        userId: useSelector(s => s.user.authUser.id),
        createdAt: Date.now(),
        targetType: 'post',
      }),
    );
  };

  return {
    handleLike,
  };
};

export default useLikes;
