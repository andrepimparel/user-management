import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../../state/store";
import { useEffect } from "react";
import { fetchUsers, getTotalPages } from "../../state/Users/usersSlice"
import AppLoading from "../../components/AppLoading/AppLoading";
import AppUsers from "../../components/AppUsers/AppUsers";
import AppButton from "../../components/AppButton/AppButton";

const Dashboard = () => {

  const users: any = useSelector((state: RootState) => state.users.data);
  const totalPages: number = useSelector((state: RootState) => state.users.totalPages);
  const pagesArray: number[] = createArrayUpTo(totalPages);
  const isLoading: any = useSelector((state: RootState) => state.users.isLoading);
  const dispatch = useDispatch<AppDispatch>();
  
  function createArrayUpTo(x: number): number[] {
    const result: number[] = [];
    for (let i = 1; i <= x; i++) {
      result.push(i);
    }
    return result;
  }
  
  useEffect(() => {
    const getUsers = async() => {
      dispatch(fetchUsers(1));
    }

    getUsers();

    const getTotalPagesFunc = async() => {
      dispatch(getTotalPages());
    }

    getTotalPagesFunc();

  },[]);


  const changePage = (id:number) => {
    dispatch(fetchUsers(id));
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
        return  <AppButton key={index} onClick={() => changePage(index+1)} text={page.toString()}></AppButton>
        })}
        </div>
      </>
      )
    }
    </div>
  )
}


export default Dashboard
