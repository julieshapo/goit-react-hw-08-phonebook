import { useSelector } from 'react-redux';
import { Title, Link, Wrapper } from './Home.styled';
import { selectIsLoggedIn } from 'redux/selectors';

const Home = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <>
      <Title>
        Welcome to the ContactBook
        <span role="img" aria-label="Greeting icon">
          📳
        </span>
      </Title>
      {!isLoggedIn && (
        <Wrapper>
          <Link to="/register">Register</Link>
          <Link to="/login">Log In</Link>
        </Wrapper>
      )}
    </>
  );
};

export default Home;
