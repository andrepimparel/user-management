import { FaTimes , FaEdit} from 'react-icons/fa';
import { User, deleteUser, fetchUsers } from '../../../state/Users/usersSlice';
import AppTextLabel from '../../AppTextLabel/AppTextLabel';
import { AppDispatch, RootState } from "../../../state/store";
import { useDispatch, useSelector } from 'react-redux';


interface AppUserComponentProps {
    // onDelete: (() => any);
    user: User
  }

const AppUser: React.FC<AppUserComponentProps> = ({ user}) => {
  const dispatch = useDispatch<AppDispatch>();
  const page: number = useSelector((state: RootState) => state.users.page);
  
  const onDelete = (id:number) => {
    dispatch(deleteUser(id));
    dispatch(fetchUsers({page: page+1,chagePage: false}))
  }

  return (
    <div className="d-flex ">
        <img src={user.avatar} alt={user.first_name}></img>
        <div className="col"><AppTextLabel text={user.first_name}></AppTextLabel></div>
        <div className="col"><AppTextLabel text={user.last_name}></AppTextLabel></div>
        <div className="col"><AppTextLabel text={user.email}></AppTextLabel></div>
        <FaEdit style={{ cursor: 'pointer' }} onClick={() => onDelete(user.id)}></FaEdit>
        <FaTimes
            style={{ color: 'red', cursor: 'pointer' }}
            onClick={() => onDelete(user.id)}
            />
    </div>
  )
}

export default AppUser
