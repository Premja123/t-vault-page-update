import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import {configureStore} from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import usersReducer from './components/features/Users';

const store=configureStore({
  reducer:{
    users:usersReducer,
    users1:usersReducer,
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals





// import React from 'react';
// import * as ReactDOMClient from 'react-dom/client';
// import './index.css';
// import App from './App';
// import { BrowserRouter } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import { store } from './store';

// const container = document.getElementById('root');
// // Create a root.
// const root = ReactDOMClient.createRoot(container);

// root.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <Provider store={store}>
//         <App />
//       </Provider>
//     </BrowserRouter>
//   </React.StrictMode>
// );





