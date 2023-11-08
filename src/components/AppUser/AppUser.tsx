import { FaTimes , FaEdit} from 'react-icons/fa';
import { User } from '../../state/Users/usersSlice';
import AppTextLabel from '../AppTextLabel/AppTextLabel';

interface AppUserComponentProps {
    // onDelete: (() => any);
    user: User
  }

const AppUser: React.FC<AppUserComponentProps> = ({ user}) => {
  return (
    <div className="d-flex ">
        <img src={user.avatar} alt={user.first_name}></img>
        <div className="col"><AppTextLabel text={user.first_name}></AppTextLabel></div>
        <div className="col"><AppTextLabel text={user.last_name}></AppTextLabel></div>
        <div className="col"><AppTextLabel text={user.email}></AppTextLabel></div>
        <FaEdit style={{ cursor: 'pointer' }}></FaEdit>
        <FaTimes
            style={{ color: 'red', cursor: 'pointer' }}
            //   onClick={() => onDelete()}
            />
    </div>
  )
}

export default AppUser
