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



function NoteListItem(props){
    const dispatch=useDispatch();
    const handleItemClick=()=>{
        console.log(props.itemIndex)
        props.handleItemClick(props.itemIndex);
      }
    return(
        <ListItem  className="border-2 border-black rounded-lg m-2 align-center justify-center" sx={{padding:0,width:"95%",alignItems:"center",direction:"column",justify:"center"}} onClick={handleItemClick}>
        <ListItemButton sx={{alignItems:"center",direction:"column",justify:"center"}}>
        <ListItemText primary={props.title}/>
        </ListItemButton>
        </ListItem>
    );
}

export default NoteListItem;