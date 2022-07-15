import React from 'react';
import TextField from '@mui/material/TextField';
import {useState} from 'react';
import { useSelector } from 'react-redux';
import {useDispatch} from "react-redux";
import {openEditor,closeEditor,updateNote} from "./noteEditorSlice";
import Button from '@mui/material/Button';
import {useEffect} from 'react';
import {useRef} from 'react';
import {addNote,saveNote,delNote} from "./noteListSlice";



function Editor(props){

    const dispatch=useDispatch();
    const note=useSelector((state)=>state.noteEditor.note);
    const titleRef=useRef(null);
    const contentRef=useRef(null);
    
    const handleChange=(event)=>{
        const updatedNote={"title":titleRef.current.value,"content":contentRef.current.value};
        dispatch(updateNote(updatedNote));
    };

    const handleSubmit=()=>{
        const updatedNote={"title":titleRef.current.value,"content":contentRef.current.value};
        if(props.index==null)
            dispatch(addNote(updatedNote));
        else
            dispatch(saveNote({"note":updatedNote,"index":props.index}));
        dispatch(closeEditor());
    }

    const handleCancel=()=>{
        dispatch(closeEditor());
    }


    return(
        <div className="p-5 flex flex-col w-[80%] h-[80%] m-10 bg-white rounded-xl shadow-2xl">
            <p className="text-black text-justify font-sans text-4xl font-semibold mb-5">Editor</p>
            <div className="flex flex-row w-full align-middle mb-5">
                <TextField  className="w-full" inputRef={titleRef} value={note?.title} onChange={handleChange} />
            </div>
            <div className="p-2 border-[#e9e9e9] border-2 rounded-md flex overflow-y-auto  flex-row w-1/1 align-middle">
                <TextField variant="standard" id="filled-multiline-flexible" multiline  sx={{width: "100%",maxHeight:"50%"}} minRows={15} inputRef={contentRef} value={note?.content} onChange={handleChange} />
            </div>
            <div className="flex flex-row w-full justify-end ">
                <Button  sx={{margin:1, marginTop:2}} variant="contained" onClick={handleSubmit} >Done</Button>
                <Button sx={{margin:1, marginTop:2}} variant="outlined" onClick={handleCancel} >Cancel</Button>
            </div>
        </div>
    );
}

export default Editor;