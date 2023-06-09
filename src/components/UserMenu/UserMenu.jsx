import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';
import { selectUser } from 'redux/selectors';

export const UserMenu = () => {
  const dispatch = useDispatch();

  const user = useSelector(selectUser);
  console.log(user);

  return (
    <div>
      <p>Welcome, _ </p>
      <button type="button" onClick={() => dispatch(logOut())}>
        Log Out
      </button>
    </div>
  );
};

// Welcome, {user.name}
