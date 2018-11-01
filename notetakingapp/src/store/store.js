import { createStore } from 'redux';
import { combineReducers } from 'redux'; 
import { NoteReducer as parentList} from '../reducer/NoteReducer';
let initialState = {
    parentList:[]
}
export let store = createStore( combineReducers ({parentList}),  initialState)