import { createSlice } from "@reduxjs/toolkit";


const addNoteStateSlice = createSlice({
  name: 'addNoteState',
  initialState: {
    titleInput: '',
    contentInput: ''
  },
  reducers: {
    setAddNoteState: (state, action) => {
      const updatedState = {...state, ...action.payload};
      return updatedState;
    }
  }
})


export const {setAddNoteState} = addNoteStateSlice.actions;
export default addNoteStateSlice.reducer;