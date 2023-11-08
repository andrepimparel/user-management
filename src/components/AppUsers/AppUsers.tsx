import { User } from "../../state/Users/usersSlice"
import AppUser from "../AppUser/AppUser"

interface AppUsesrComponentProps {
    users: User[]
  }

const AppUsers: React.FC<AppUsesrComponentProps> = ({users}) => {
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
