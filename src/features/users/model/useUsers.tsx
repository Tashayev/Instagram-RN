
import { useDispatch } from "@/app/store/hooks/useDispach"
import { useSelector } from "@/app/store/hooks/useSelector";
import { useEffect } from "react";
import { users } from "../../../../data";
import { userAction } from "./userSlice";



const useUsers = () => {
  const dispatch = useDispatch();
  const getAllUsers = useSelector((state)=>state.user.users);

  useEffect(()=>{
    if(getAllUsers.length === 0){
      dispatch(userAction.setAllUsers(users))
    }
  },[])
  return {
    users: getAllUsers
  }
}

export default useUsers;




