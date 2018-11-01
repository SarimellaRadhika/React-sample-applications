import { createStore } from 'redux';
import { combineReducers } from 'redux'; 
import {NotePadReducer as noteObj }  from '../Reducer/NotePadReducer'
let initialState = {
    noteObj:{}

}

export let store = createStore( combineReducers ({noteObj}),  initialState)