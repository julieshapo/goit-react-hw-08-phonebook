import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
// import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { persistor, store } from 'redux/store';
// import { GlobalStyle } from '../src/components/GlobalStyles';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { ChakraBaseProvider, extendBaseTheme } from '@chakra-ui/react';
import chakraTheme from '@chakra-ui/theme';
import './index.css';

const { Button } = chakraTheme.components;

const theme = extendBaseTheme({
  components: {
    Button,
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ChakraBaseProvider theme={theme}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ChakraBaseProvider>
      </PersistGate>
    </Provider>
    {/* <GlobalStyle /> */}
  </React.StrictMode>
);
