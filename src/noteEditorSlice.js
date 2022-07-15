import {createSlice} from "@reduxjs/toolkit";
import {addNote,saveNote,delNote} from "./noteListSlice";

const initialState={
    note:null,
    open:false,
    index:null
};

const noteEditorSlice=createSlice({
    name:"noteEditor",
    initialState:initialState,
    reducers:{
        openEditor: (state,action)=>{
            state.open=true
            console.log(action.payload)
            if(action.payload!=null)
                state.note=action.payload;
            else
                state.note={"title":"Title","content":"Content"};
        },
        closeEditor: (state,action)=>{
            state.open=false;
        },
        updateNote: (state,action)=>{
            console.log("Note updates");
            state.note=action.payload;
            console.log(state.note);
        }
    }
});

export const {openEditor,closeEditor,updateNote} = noteEditorSlice.actions;

export default noteEditorSlice.reducer;