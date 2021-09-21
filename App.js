//Importing gesture-handler for stack navigator
import 'react-native-gesture-handler';

import React from 'react';

import { Provider } from 'react-redux';
import store from './src/redux/store';

import MainNavigator from './src/navigation/MainNavogator';


const App = () => {
  return(
    <Provider store={store}>
      <MainNavigator/>
    </Provider>
  )
}

export default App;
