import { useDispatch } from '@/app/store/hooks/useDispach';
import {useSelector} from '@/app/store/hooks/useSelector'
import { useEffect } from 'react';
import { postAction } from './postSlice';
import { postsData } from '../../../../data';



export const usePosts = () => {
  const dispatch = useDispatch()
  const posts = useSelector((state) => state.post.posts);
  
  useEffect(()=>{
    if(posts.length === 0){
      dispatch(postAction.setAllPosts(postsData))
    }
  },[])
  return{
     posts
  };
};
