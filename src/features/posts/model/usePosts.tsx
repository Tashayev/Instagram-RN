import { useDispatch } from '@/app/store/hooks/useDispach';
import {useSelector} from '@/app/store/hooks/useSelector'
import { useEffect } from 'react';
import { postAction } from './postSlice';
import { postsData } from '../../../../data';
import { selectAllPosts } from './postSelector';
import useUsers from '@/features/users/model/useUsers';



const usePosts = () => {
  const dispatch = useDispatch();
  const {currentUser} = useUsers()
  const postsAll = useSelector(selectAllPosts);

const posts = currentUser
  ? postsAll.filter(p => p.userId !== currentUser.id)
  : postsAll;

  useEffect(()=>{
    if(posts.length === 0){
      dispatch(postAction.setAllPosts(postsData))
    }
  },[])
  return{
     posts
  };
};
export default usePosts