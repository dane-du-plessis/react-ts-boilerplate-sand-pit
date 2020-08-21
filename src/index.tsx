import React from 'react';
import ReactDOM from 'react-dom';
import {ThemeProvider} from "@chakra-ui/core";

import './index.css';
import App from './App';
import store from './models/TodoStore';
import * as serviceWorker from './serviceWorker';
import customTheme from './style/customTheme';
import theme from './style/theme';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={customTheme}>
       <App store={store}/>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
