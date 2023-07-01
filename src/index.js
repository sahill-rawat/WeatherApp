import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import store from './store';
import { Provider } from 'react-redux';
import {ChakraProvider, theme} from '@chakra-ui/react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ChakraProvider theme={theme}>
      <Provider  store={store}>
      <App />
      </Provider>
    </ChakraProvider>
);


export const server = "https://api.openweathermap.org/data/2.5/weather";