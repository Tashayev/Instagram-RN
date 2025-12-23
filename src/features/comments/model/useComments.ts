import { useDispatch } from '@/shared/utils/hooks/useDispach';
import { useSelector } from '@/shared/utils/hooks/useSelector';
import { useEffect } from 'react';
import { commentAction } from './commetSlice';
import { postComments } from '../../../../data';


const useComments = () => {
  const dispatch = useDispatch();

  const comments = useSelector(state => state.comment.postComments);

  
  useEffect(() => {
    if (comments.length === 0) {
      dispatch(commentAction.setPostComments(postComments));
    }
  }, [comments, dispatch]);

  return {
    postComments: comments,
    
  };
};

export default useComments;
