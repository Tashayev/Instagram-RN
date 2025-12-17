import { useDispatch } from '@/app/store/hooks/useDispach';
import {useSelector} from '@/app/store/hooks/useSelector'
import { useEffect } from 'react';
import { postAction } from './postSlice';
import { postsData } from '../../../../data';
import { selectPostsExceptCurrentUser } from './postSelector';
import useUsers from '@/features/users/model/useUsers';



export const usePosts = () => {
  const dispatch = useDispatch();
  const {currentUser} = useUsers()
  const posts = useSelector(selectPostsExceptCurrentUser(currentUser.id));
  
  useEffect(()=>{
    if(posts.length === 0){
      dispatch(postAction.setAllPosts(postsData))
    }
  },[])
  return{
     posts
  };
};
