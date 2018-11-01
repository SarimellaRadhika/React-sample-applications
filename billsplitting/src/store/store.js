import { createStore } from 'redux';
import { combineReducers } from 'redux'; 
import { billReducer as parentList} from '../reducers/billReducer';
let initialState = {
parentList:[]
}
export let store = createStore( combineReducers ({parentList}),  initialState)