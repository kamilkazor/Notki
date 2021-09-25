import { configureStore } from "@reduxjs/toolkit";

import notesReducer from './notes';
import newNoteReducer from './newNote';


const store = configureStore({
  reducer: {
    notes: notesReducer,
    newNote: newNoteReducer
  }
})


export default store;