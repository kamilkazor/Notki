import { createSlice } from "@reduxjs/toolkit";


const editedNoteSlice = createSlice({
  name: 'editedNote',
  initialState: {
    titleText: '',
    contentText: '',
    id: ''
  },
  reducers: {
    setEditedNote: (state, action) => {
      const updatedState = {...state, ...action.payload};
      return updatedState;
    }
  }
})


export const {setEditedNote} = editedNoteSlice.actions;
export default editedNoteSlice.reducer;