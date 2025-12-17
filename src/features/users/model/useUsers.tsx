import { useDispatch } from '@/app/store/hooks/useDispach';

import { useEffect } from 'react';
import { users } from '../../../../data';
import { userAction } from './userSlice';
import { selectUsersExceptCurrent } from './userSelector';
import { useSelector } from '@/app/store/hooks/useSelector';


const useUsers = () => {
  const dispatch = useDispatch();
  const getAllUsers = useSelector(selectUsersExceptCurrent);
  const stories = useSelector(state => state.story.stories)
  useEffect(() => {
    if (getAllUsers.length === 0) {
      dispatch(userAction.setAllUsers(users));
    }
  }, []);
  const currentUser = useSelector(state => state.user.authUser);

  const allUsers = () => {
    if (!currentUser) return [];
    return getAllUsers.filter(user => user.id !== currentUser.id);
  };
  const getStories = () => {
    if (!currentUser) return false;
    return stories.some(s => s.userId === currentUser.id);
  };

  return {
    users: allUsers(),
    currentUser,
    isCurrentUserHasStories: getStories(),
  };
};

export default useUsers;
