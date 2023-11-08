import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../../state/store";
import { useEffect } from "react";
import { fetchUsers, getTotalUsers } from "../../state/Users/usersSlice"
import AppLoading from "../../components/AppLoading/AppLoading";
import AppUsers from "../../components/AppUsers/AppUsers";

const Dashboard = () => {

  const users: any = useSelector((state: RootState) => state.users.data);
  const totalPages: number = useSelector((state: RootState) => state.users.totalPages);
  const isLoading: any = useSelector((state: RootState) => state.users.isLoading);
  const dispatch = useDispatch<AppDispatch>();
  const USERS_PER_PAGE = 6

  useEffect(() => {
    const getUsers = async() => {
      console.log(isLoading)
      dispatch(fetchUsers(1));
      console.log("asdas")
      console.log(users)
      console.log(isLoading)
    }

    const getTotalPages = async() => {
      dispatch(getTotalUsers());
    }

    getUsers();
    getTotalPages();
  },[]);

  return (
    <div>
      { isLoading ? 
       <AppLoading /> : (
       <>
        <AppUsers users={users} />
        {[].forEach}
        <p>{Math.ceil(totalPages/USERS_PER_PAGE)}</p>
      </>
      )
    }
    </div>
  )
}


export default Dashboard
