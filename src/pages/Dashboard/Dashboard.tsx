import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../state/store";

const Dashboard = () => {

  const users = useSelector((state: RootState) => state.users.data);
  const dispatch = useDispatch();
  return (
    <div>
      <p>Dashboard Works!</p>
    </div>
  )
}

export default Dashboard
