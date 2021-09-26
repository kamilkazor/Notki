import { configureStore } from "@reduxjs/toolkit";

import notesReducer from './notes';
import newNoteReducer from './newNote';
import editedNoteReducer from "./editedNote";


const store = configureStore({
  reducer: {
    notes: notesReducer,
    newNote: newNoteReducer,
    editedNote: editedNoteReducer
  }
})


export default store;