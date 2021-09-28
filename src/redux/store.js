import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import {combineReducers} from "redux"; 
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE
} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

import notesReducer from './notes';
import newNoteReducer from './newNote';
import editedNoteReducer from "./editedNote";


const rootReducer = combineReducers({
  notes: notesReducer,
  newNote: newNoteReducer,
  editedNote: editedNoteReducer
})


const persistConfig = {  
  key: 'root',  
  version: 1,  
  storage: AsyncStorage
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    }
  })
});

const persistor = persistStore(store);


export {persistor};
export default store;