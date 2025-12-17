import { useDispatch } from '@/app/store/hooks/useDispach';
import { useSelector } from '@/app/store/hooks/useSelector';
import { useEffect } from 'react';
import { stories } from '../../../../data';
import { storyAction } from './storySlice';
import useUsers from '@/features/users/model/useUsers';
import { selectStoriesExceptCurrentUser } from './storySelctor';
import { StoryViewedTypes } from '../types/StoriesTypes';

export const useStories = () => {
  const dispatch = useDispatch();
  const { currentUser } = useUsers();
  const getAllStoreis = useSelector(
    selectStoriesExceptCurrentUser
  );

  useEffect(() => {
    if (getAllStoreis.length === 0) {
      dispatch(storyAction.setAllStories(stories));
    }
  }, [getAllStoreis.length, dispatch]);

  const isStoryViewedByCurrentUser = (storyId: number) => {
    return (
      getAllStoreis
        .find(story => story.id === storyId)
        ?.viewedBy?.some(view => view.userId === currentUser.id) ?? false
    );
  };
  const handleAddToViewedList = (payload: StoryViewedTypes) => {
    dispatch(storyAction.addCurrentUserToViwedList(payload));
  };

  return {
    stories: getAllStoreis,
    isStoryViewedByCurrentUser,
    handleAddToViewedList,
  };
};
