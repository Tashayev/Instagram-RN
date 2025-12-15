import { useDispatch } from "@/app/store/hooks/useDispach"
import { useSelector } from "@/app/store/hooks/useSelector";
import { useEffect } from "react";
import { stories } from "../../../../data"; 
import { storyAction } from "./storySlice";


export const useStories = () => {
  const dispatch = useDispatch();

  const getAllStoreis = useSelector((state)=> state.story.stories)
  useEffect(()=>{
    if(getAllStoreis.length === 0){
      dispatch(storyAction.setAllStories(stories));
    }
  },[])
  return{
    stories: getAllStoreis
  }
}