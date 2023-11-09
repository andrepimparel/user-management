import {  useSelector } from "react-redux";
import { User } from "../../../state/Users/usersSlice"
import AppUser from "../AppUser/AppUser"
import {  RootState } from "../../../state/store";
import { useEffect } from "react";


interface AppUsesrComponentProps {
    users: User[]
  }

const AppUsers: React.FC<AppUsesrComponentProps> = ({users}) => {

    const USERS_PER_PAGE = 6;
    const pageDashboard: any = useSelector((state: RootState) => state.users.page);

    useEffect(() => {
      console.log(pageDashboard)
  
    },[]);
    
  return (
    <div>
      {
      users.length > 0 && users.slice(USERS_PER_PAGE*(pageDashboard-1),USERS_PER_PAGE*(pageDashboard)).length ? (
                  users.map(
                    (user: User, index: number) => {
                      
                        const res =  (USERS_PER_PAGE*(pageDashboard-1) <= index && USERS_PER_PAGE*(pageDashboard) > index ) ?  <AppUser key={user.id} user={user} />: <></>
                        return res
        
                    }
                  )
                ) : (
                  'No Users To Show'
                )}
    </div>
  )
}

export default AppUsers
