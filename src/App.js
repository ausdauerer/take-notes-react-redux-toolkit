import './App.css';
import { useSelector } from 'react-redux';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';
import {useDispatch} from "react-redux";
import {addNote,saveNote,delNote} from "./noteListSlice";
import {openEditor,closeEditor} from "./noteEditorSlice";
import Backdrop from '@mui/material/Backdrop';
import {useState} from 'react';
import TextField from '@mui/material/TextField';
import Editor from './Editor';
import NoteListItem from './NoteListItem';

function App() {
  const notes=useSelector((state)=>state.noteList.notes);
  const backDropOpen=useSelector((state)=>state.noteEditor.open);
  const [index,setIndex]=useState(null);
  const dispatch=useDispatch();
  
  const handleItemClick=(ind)=>{
    console.log(ind)
    setIndex(ind);
    dispatch(openEditor(notes[ind]));
  }

  const handleAddNote=()=>{
    setIndex(null);
    dispatch(openEditor(null));
  }

  return (
    <div className="flex flex-row flex-wrap justify-center align-middle max-h-screen">
      <div className="flex flex-row justify-start w-full">
        <p className="font-sans text-3xl font-semibold m-5">Take Notes</p>
      </div>
      <div className="flex flex-row justify-center w-full">
        <p className="font-sans text-3xl font-semibold m-5">Your notes</p>
      </div>
      <div className="flex flex-row justify-center w-full">
        <p className="font-mono text-sm text-center font-semibold md:ml-0 md:mr-0 ml-12 mr-12 ">Click to open the note or add one using the add button</p>
      </div>
      <div className="flex max-h-flex-row flex-wrap justify-center w-[200vh] max-h-[80vh]">
      <List className="w-[90%] md:w-[60%] h-full" style={{maxHeight: "76%",width:"full",overflow:"auto",marginLeft:"2%"}}>
        {notes.map((note,index)=>
            {
            if(note!=null)
            return(
              <NoteListItem title={note.title} itemIndex={index} key={index} setIndex={setIndex} handleItemClick={handleItemClick}/>
            );
            }
        )}
      </List>
      <div className="w-full flex flex-row h-fit justify-center">
      <Button className="w-fit" onClick={handleAddNote} variant="contained">Add note</Button>
      </div>
      </div>
      <div className="flex flex-row justify-center w-full">
      </div>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={backDropOpen}>
        <Editor index={index}/>
      </Backdrop>
    </div>
  );
}

export default App;
