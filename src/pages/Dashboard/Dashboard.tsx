import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../../state/store";
import { useEffect } from "react";
import { fetchUsers, getTotalPages } from "../../state/Users/usersSlice"
import AppLoading from "../../components/AppLoading/AppLoading";
import AppUsers from "../../components/AppUsers/AppUsers";
import AppButton from "../../components/AppButton/AppButton";

const Dashboard = () => {


  const users: any = useSelector((state: RootState) => state.users.data);
  const pageDashboard: any = useSelector((state: RootState) => state.users.page);

  const isLoading: any = useSelector((state: RootState) => state.users.isLoading);
  const dispatch = useDispatch<AppDispatch>();
 
  
  


  useEffect(() => {
    const getUsers = async() => {
      dispatch(fetchUsers(1));
    }

    const getTotalPagesFunc = async() => {
      dispatch(getTotalPages());
    }

    
    

    getUsers();
    getTotalPagesFunc();
  },[]);


  const changePage = (id:number) => {
    dispatch(fetchUsers(2));
  }

  return (
    <div>
      <AppButton text="Add User" ></AppButton>
      { isLoading ? 
       <AppLoading /> : (
       <>
        <AppUsers users={users} />
        <div className="d-flex p-2 justify-content-center">
        {pagesArray.map((page: number, index: number) => {
          const res =  (USERS_PER_PAGE*(pageDashboard-1) > index && USERS_PER_PAGE*(pageDashboard) < index ) ?  <AppButton key={index} onClick={() => changePage(index)} text={page.toString()}></AppButton> : <p key={index}>No User</p>
          return res
        })}
        </div>
      </>
      )
    }
    </div>
  )
}


export default Dashboard
