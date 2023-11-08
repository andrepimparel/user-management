import { useDispatch, useSelector } from "react-redux";
import { User } from "../../state/Users/usersSlice"
import AppUser from "../AppUser/AppUser"
import { AppDispatch, RootState } from "../../state/store";

interface AppUsesrComponentProps {
    users: User[]
  }

const AppUsers: React.FC<AppUsesrComponentProps> = ({users}) => {

    const USERS_PER_PAGE = 6;
    const totalPages: number = useSelector((state: RootState) => state.users.totalPages);
    const dispatch = useDispatch<AppDispatch>();
    const pagesArray: number[] = createArrayUpTo(totalPages);

    function createArrayUpTo(x: number): number[] {
        const result: number[] = [];
        for (let i = 1; i <= x; i++) {
          result.push(i);
        }
        return result;
      }

  return (
    <div>
      {
      users.length > 0 ? (
                  users.map(
                    (user: User) => {
                      return <AppUser key={user.id} user={user} />
                    }
                  )
                ) : (
                  'No Users To Show'
                )}
    </div>
  )
}

export default AppUsers
