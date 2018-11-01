import { createStore } from 'redux';
import { combineReducers } from 'redux'; 
import {commentsReducer as comments} from '../reducer/chatReducer'
let initialState = {
    comments:[]
}
export let store = createStore( combineReducers ({comments}),  initialState)