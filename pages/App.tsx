import React from 'react';
import LoginPage from '../components/LoginPage/index';
import '../styles/global';

import store from '../store';
import { Provider } from 'react-redux';



function App() {
  return (
    <Provider store={store}>
    <LoginPage/>
  
    </Provider>
  )
}

export default App;
