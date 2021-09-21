import { createSlice } from "@reduxjs/toolkit";


//Dummy initial state
const dummyNotes = [
  {
    text: 'lorem ipsum',
    id: '1'
  },
  {
    text: 'lorem ipsum',
    id: '2'
  },
  {
    text: 'lorem ipsum',
    id: '3'
  },
  {
    text: 'lorem ipsum',
    id: '4'
  },
  {
    text: 'lorem ipsum',
    id: '5'
  },
  {
    text: 'lorem ipsum',
    id: '6'
  },
  {
    text: 'lorem ipsum',
    id: '7'
  }
]


const notesSlice = createSlice({
  name: 'notes',
  initialState: [...dummyNotes],
  reducers: {
    addNewNote: (state, action) => {
       const updatedState = [action.payload, ...state];
       return updatedState;
    }
  }
})


export const {addNewNote} = notesSlice.actions;
export default notesSlice.reducer;