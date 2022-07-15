import {createSlice} from "@reduxjs/toolkit";

const initialState={
    notes:[{"title":"Sunday Todo","content":"Take trash out\nClean car\nGo cycling"}]
}

export const noteListSlice=createSlice({
    name:"noteList",
    initialState:initialState,
    reducers:{
        addNote: (state,action) =>{
            state.notes.push(action.payload);
            console.log(action.payload);
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