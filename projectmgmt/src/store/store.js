import { createStore } from 'redux';
import { combineReducers } from 'redux'; 
import { ProjectReducer as parentList} from '../reducer/ProjectReducer'
let initialState = {
    parentList:{
    ProjectList:[]
    }
}
export let store = createStore( combineReducers ({parentList}),  initialState)