import { AppBar } from 'components/AppBar/AppBar';
import { Container } from './Layout.styled';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

export const Layout = () => {
  return (
    <Container>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <footer>Made with Love by JS</footer>
      <Toaster />
    </Container>
  );
};
