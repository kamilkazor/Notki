import { createSlice } from "@reduxjs/toolkit";


const notesSlice = createSlice({
  name: 'notes',
  initialState: [],
  reducers: {
    addNewNote: (state, action) => {
      const updatedState = [action.payload, ...state];
      return updatedState;
    },
    updateNote: (state, action) => {
      const updatedState = state.map((note) => note.id === action.payload.id ? action.payload : note);
      return updatedState;
    },
    removeNote: (state, action) => {
      const updatedState = state.filter((note) => note.id !== action.payload);
      return updatedState;
    },
    changeNoteIndex: (state, action) => {
      let updatedState = [...state];
      updatedState.splice(action.payload.newIndex, 0, updatedState.splice(action.payload.oldIndex, 1)[0]);
      return updatedState;
    }
  }
})


export const {addNewNote, updateNote, removeNote, changeNoteIndex} = notesSlice.actions;
export default notesSlice.reducer;