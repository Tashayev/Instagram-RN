import { useDispatch } from '@/app/store/hooks/useDispach';
import { useSelector } from '@/app/store/hooks/useSelector';
import { useEffect } from 'react';
import { commentAction } from './commetSlice';
import { postComments } from '../../../../data';

const useComments = () => {
  const dispatch = useDispatch();

  const getAllPostComments = useSelector(state => state.comment.postComments);
  
  useEffect(() => {
    if (getAllPostComments.length === 0) {
      dispatch(commentAction.setPostComments(postComments));
    }
  }, []);

  return {
    postComments: getAllPostComments,
  };
};

export default useComments;
