import {createSlice} from "@reduxjs/toolkit";

const noteListSlice=createSlice({
    name:"noteList",
    initialState:{
        notes:[{"title":"Note1","content":"Hello World!!!!"}]
    },
    reducers:{
        addNote: (state,action) =>{
            noteEditor=true;
            state.notes.push(action.payload);
        },
        delNote: (state,action) =>{
            state.notes=state.notes.splice(action.payload,1);
        },
        saveNote: (state,action)=>{
            state.notes[action.payload.index]=action.payload.note;
        }
    }
});

export const {addNote,delNote,saveNote} = noteListSlice.actions;

export default noteListSlice.reducer;