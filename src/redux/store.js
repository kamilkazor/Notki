import { configureStore } from "@reduxjs/toolkit";

import notesReducer from './notes'


const store = configureStore({
  reducer: {
    notes: notesReducer
  }
})


export default store;