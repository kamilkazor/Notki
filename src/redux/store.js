import { configureStore } from "@reduxjs/toolkit";

import notesReducer from './notes';
import addNoteStateReducer from './addNoteState';


const store = configureStore({
  reducer: {
    notes: notesReducer,
    addNoteState: addNoteStateReducer
  }
})


export default store;