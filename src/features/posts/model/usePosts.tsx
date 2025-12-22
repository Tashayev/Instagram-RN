import { useDispatch } from '@/shared/utils/hooks/useDispach';
import { useSelector } from '@/shared/utils/hooks/useSelector';
import { useEffect } from 'react';
import { postAction } from './postSlice';
import { postsData } from '../../../../data';
import { selectAllPosts } from './postSelector';
import useUsers from '@/features/users/model/useUsers';
import { selectCurrentUserMarks } from '@/features/users/model/userSelector';


const usePosts = () => {
  const dispatch = useDispatch();
  const { currentUser } = useUsers();

  const postsAll = useSelector(selectAllPosts);
  const marks = useSelector(selectCurrentUserMarks);

  const posts = currentUser
    ? postsAll.filter(p => p.userId !== currentUser.id)
    : postsAll;


  const postsWithMarks = posts.map(post => ({
    ...post,
    isMarked: marks.some(mark => mark.targetId === post.id),
  }));

  useEffect(() => {
    if (posts.length === 0) {
      dispatch(postAction.setAllPosts(postsData));
    }
  }, []);

  return {
    posts: postsWithMarks,
  };
};

export default usePosts;
