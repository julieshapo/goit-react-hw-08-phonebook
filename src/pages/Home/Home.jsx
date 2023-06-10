import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>
        Welcome to the Contactbook
        <span role="img" aria-label="Greeting icon">
          💁‍♀️
        </span>
        <Link to="/register">Register</Link>
        <Link to="/login">Log In</Link>
      </h1>
    </div>
  );
};

export default Home;
