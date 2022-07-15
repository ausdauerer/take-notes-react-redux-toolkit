import {configureStore} from "@reduxjs/toolkit";
import noteListReducer from "./noteListSlice";
import noteEditorReducer from "./noteEditorSlice";


const reducer={
    noteList:noteListReducer,
    noteEditor:noteEditorReducer
}
const store=configureStore({
    reducer:reducer
});

export default store;