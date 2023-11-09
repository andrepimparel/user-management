import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../../state/store";
import { useEffect, useState } from "react";
import { fetchUsers, getTotalPages, showAddUser,  } from "../../state/Users/usersSlice"
import AppLoading from "../../components/AppLoading/AppLoading";
import AppUsers from "../../components/User/AppUsers/AppUsers";
import AppButton from "../../components/AppButton/AppButton";
import AppAddUser from "../../components/User/AppAddUser/AppAddUser";

const Dashboard = () => {

  const users: any = useSelector((state: RootState) => state.users.data);
  const isAddUser: any = useSelector((state: RootState) => state.users.isAddUser);
  const selectedPage : any = useSelector((state: RootState) => state.users.page);
  const totalUsers : any = useSelector((state: RootState) => state.users.totalUsers);
  const totalPages: number = useSelector((state: RootState) => state.users.totalPages);
  const pagesArray: number[] = createArrayUpTo(Math.ceil(totalUsers/6) );
  const isLoading: any = useSelector((state: RootState) => state.users.isLoading);
  const dispatch = useDispatch<AppDispatch>();
  


  function createArrayUpTo(x: number): number[] {
    const result: number[] = [];
    for (let i = 1; i <= x; i++) {
      result.push(i);
    }
    return result
  }
  
  useEffect(() => {
    const getUsers = async() => {
      dispatch(fetchUsers({page: 1,chagePage: true}));
    }

    getUsers();

    const getTotalPagesFunc = async() => {
      dispatch(getTotalPages());
    }

    getTotalPagesFunc();

  },[]);


  const changePage = (id:number) => {
    dispatch(fetchUsers({page: id,chagePage: true}));
  }

  const onShowAddUser = () => {
    dispatch(showAddUser())
  }

  return (
    <div>
      <AppButton text="Add User" onClick={onShowAddUser}></AppButton>
      {isAddUser ? <AppAddUser /> : <></>}
      { isLoading ? 
       <AppLoading /> : (
       <>
        <AppUsers users={users} />
        <div className="d-flex p-2 justify-content-center">
        {pagesArray.map((page: number, index: number) => {
        return  <AppButton key={index} onClick={() => changePage(index+1)} text={page.toString()}
        isSelected={(page === selectedPage )? true: false}></AppButton>
        })}
        </div>
      </>
      )
    }
    </div>
  )
}


export default Dashboard
