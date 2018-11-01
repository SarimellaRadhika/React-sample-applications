import { createStore } from 'redux';
import { combineReducers } from 'redux'; 
import {chatReducer as parentList} from '../reducer/chatReducer'
let initialState = {
    parentList:[]
}
export let store = createStore( combineReducers ({parentList}),  initialState)