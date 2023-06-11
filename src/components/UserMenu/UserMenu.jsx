import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';
import {
  selectIsLoggedIn,
  selectIsRefreshing,
  // selectUser,
} from 'redux/selectors';
import { Button, Name, Wrapper } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  // const user = useSelector(selectUser);
  // console.log(user);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  // console.log(isLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  // console.log(isRefreshing);

  return (
    <Wrapper>
      {!isRefreshing && isLoggedIn && <Name>Welcome,_ </Name>}
      <Button type="button" onClick={() => dispatch(logOut())}>
        Log Out
      </Button>
    </Wrapper>
  );
};

// Welcome, {user.name}
