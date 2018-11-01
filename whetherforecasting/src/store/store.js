import { createStore } from 'redux';
import { combineReducers } from 'redux'; 

let initialState = {
}
export let store = createStore( combineReducers ({}),  initialState)