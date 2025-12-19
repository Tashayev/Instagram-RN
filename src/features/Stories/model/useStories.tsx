import { useDispatch } from '@/app/store/hooks/useDispach';
import { useSelector } from '@/app/store/hooks/useSelector';
import { useEffect } from 'react';
import { stories as storiesData, storyContents } from '../../../../data';
import { storyAction } from './storySlice';
import useUsers from '@/features/users/model/useUsers';
import {  selectStoriesWithContent } from './storySelector';
import { markStoryViewedThunk } from './thunks/markStoryViewedThunk';
import { RootState } from '@/app/store/store';

const useStories = () => {
  const dispatch = useDispatch();
  const { currentUser } = useUsers();

  const storiesRaw = useSelector((state: RootState) => state.story.stories);
  const storiesWithContent = useSelector(selectStoriesWithContent);

const contentsRaw = useSelector((state: RootState) => state.story.storiesContents);


const stories = currentUser
  ? storiesWithContent.filter(s => s.userId !== currentUser.id)
  : storiesWithContent;

  const contents = useSelector(state => state.story.storiesContents);

  useEffect(() => {
    if (storiesRaw.length === 0) {
      dispatch(storyAction.setAllStories(storiesData));
      dispatch(storyAction.setStoriesContents(storyContents))
    }
  }, [storiesRaw.length, dispatch,contentsRaw.length]);

  const getStoryByUserId = (userId: number) =>
    stories.find(story => story.userId === userId);

  const getStoryContents = (storyId: number) =>
    contents.filter(c => c.storyId === storyId);

  const isStoryViewedByCurrentUser = (storyId: number) =>
    stories
      .find(story => story.id === storyId)
      ?.viewedBy?.some(v => v.userId === currentUser.id) ?? false;

  const handleAddToViewedList = (storyId: number) => {
    dispatch(markStoryViewedThunk(storyId));
  };
 
  return {
    stories,
    getStoryByUserId,
    getStoryContents,
    isStoryViewedByCurrentUser,
    handleAddToViewedList,
  };
};

export default useStories;
