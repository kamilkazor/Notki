//Importing gesture-handler for stack navigator
import 'react-native-gesture-handler';

import React from 'react';

import { Provider } from 'react-redux';
import store, {persistor} from './src/redux/store';
import {PersistGate} from 'redux-persist/integration/react';

import MainNavigator from './src/navigation/MainNavogator';


const App = () => {
  return(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <MainNavigator/>
      </PersistGate>
    </Provider>
  )
}

export default App;
