import { createSlice } from "@reduxjs/toolkit";


//Dummy initial state
const dummyNotes = [
  {
    titleText: 'lorem ipsum 1',
    contentText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    id: '1'
  },
  {
    titleText: 'lorem ipsum 2',
    contentText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    id: '2'
  },
  {
    titleText: 'lorem ipsum 3',
    contentText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    id: '3'
  },
  {
    titleText: 'lorem ipsum 4',
    contentText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    id: '4'
  },
  {
    titleText: 'lorem ipsum 5',
    contentText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    id: '5'
  },
  {
    titleText: 'lorem ipsum 6',
    contentText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    id: '6'
  },
  {
    titleText: 'lorem ipsum 7',
    contentText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    id: '7'
  },
  {
    titleText: 'lorem ipsum 8',
    contentText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    id: '8'
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
    updateNote: (state, action) => {
      const updatedState = state.map((note) => note.id === action.payload.id ? action.payload : note);
      return updatedState;
    },
    removeNote: (state, action) => {
      const updatedState = state.filter((note) => note.id !== action.payload);
      return updatedState;
    }
  }
})


export const {addNewNote, updateNote, removeNote} = notesSlice.actions;
export default notesSlice.reducer;