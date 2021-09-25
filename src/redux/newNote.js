import { createSlice } from "@reduxjs/toolkit";


const newNoteSlice = createSlice({
  name: 'newNote',
  initialState: {
    titleText: '',
    contentText: '',
    id: ''
  },
  reducers: {
    setNewNote: (state, action) => {
      const updatedState = {...state, ...action.payload};
      return updatedState;
    }
  }
})


export const {setNewNote} = newNoteSlice.actions;
export default newNoteSlice.reducer;