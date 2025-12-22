import { useDispatch } from '@/shared/utils/hooks/useDispach';
import { useSelector } from '@/shared/utils/hooks/useSelector';
import { useEffect } from 'react';
import { savedPosts } from '../../../../data';
import { markAction } from './markSlider';
import { selectCurrentUserMarks } from './markSelector';

const useMarks = () => {
  const dispatch = useDispatch();
  const marks = useSelector(state => state.mark.marks);
  const isMarked=(postId: number) => useSelector(selectCurrentUserMarks)

  useEffect(() => {
    if (marks.length === 0) dispatch(markAction.setMarks(savedPosts));
  }, []);

  return {
    marks,
    isMarked
  };
};

export default useMarks;
