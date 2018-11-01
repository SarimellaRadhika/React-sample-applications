import { createStore } from 'redux';
import { combineReducers } from 'redux'; 
import {IbReducer as parentList} from '../Reducers/IbReducer'
let initialState = {
    parentList:{
        ideaList:[]
    }
}
export let store = createStore( combineReducers ({parentList}),  initialState)