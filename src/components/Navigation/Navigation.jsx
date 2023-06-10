import { useSelector } from 'react-redux';
import { NavLink } from './Navigation.styled';
import { selectIsLoggedIn } from 'redux/selectors';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      {isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}
    </nav>
  );
};
