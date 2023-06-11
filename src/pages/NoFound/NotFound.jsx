import { Title, Link, Wrapper } from './NotFound.styled';

const NotFound = () => {
  return (
    <Wrapper>
      <Title>Page not found</Title>
      <Link to="/">Back to HomePage</Link>
    </Wrapper>
  );
};

export default NotFound;
