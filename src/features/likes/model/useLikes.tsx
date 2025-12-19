import { useDispatch } from "@/shared/utils/hooks/useDispach"
import { useSelector } from "@/shared/utils/hooks/useSelector";
import { useEffect } from "react";
import { likeAction } from "./likeSlice";
import { postLikes } from "../../../../data";


const useLikes = () => {
  const dispatch = useDispatch();

  const getPostLikes = useSelector((state)=>state.like.postLikes);

  useEffect(()=>{
    if(getPostLikes.length === 0){
      dispatch(likeAction.setPostLikes(postLikes))
    }
  },[])

  return {
    postLikes: getPostLikes
  }
}

export default useLikes