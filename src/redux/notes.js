import { createSlice } from "@reduxjs/toolkit";


//Dummy initial state
const dummyNotes = [
  {
    text: 'lorem ipsum 1',
    id: '1'
  },
  {
    text: 'lorem ipsum 2',
    id: '2'
  },
  {
    text: 'lorem ipsum 3',
    id: '3'
  },
  {
    text: 'lorem ipsum 4',
    id: '4'
  },
  {
    text: 'lorem ipsum 5',
    id: '5'
  },
  {
    text: 'lorem ipsum 6',
    id: '6'
  },
  {
    text: 'lorem ipsum 7',
    id: '7'
  },
  {
    text: 'lorem ipsum 8',
    id: '8'
  },
  {
    text: 'lorem ipsum 9',
    id: '9'
  },
  {
    text: 'lorem ipsum 10',
    id: '10'
  },
  {
    text: 'lorem ipsum 11',
    id: '11'
  },
  {
    text: 'lorem ipsum 12',
    id: '12'
  },
  {
    text: 'lorem ipsum 13',
    id: '13'
  },
  {
    text: 'lorem ipsum 14',
    id: '14'
  },
  {
    text: 'lorem ipsum 15',
    id: '15'
  }
]


const notesSlice = createSlice({
  name: 'notes',
  initialState: [...dummyNotes],
  reducers: {
    addNewNote: (state, action) => {
      const updatedState = [action.payload, ...state];
      return updatedState;
    },
    removeNote: (state, action) => {
      const updatedState = state.filter((note) => note.id !== action.payload);
      return updatedState;
    }
  }
})


export const {addNewNote, removeNote} = notesSlice.actions;
export default notesSlice.reducer;