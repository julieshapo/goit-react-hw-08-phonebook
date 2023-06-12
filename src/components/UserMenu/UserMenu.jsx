import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';
import { selectUser } from 'redux/selectors';
import { Button, Name, Wrapper } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <Wrapper>
      <Name>Welcome,{user.name} </Name>
      <Button type="button" onClick={() => dispatch(logOut())}>
        Log Out
      </Button>
    </Wrapper>
  );
};
