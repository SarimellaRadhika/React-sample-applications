import { createStore } from 'redux';
import { combineReducers } from 'redux'; 
import {todolistReducer as parentList} from '../reducer/todolistReducer';
import {orgReducer as organization} from '../reducer/orgReducer';
let initialState = {
    parentList:{
        todoList:[],
        completedList:[],
        listType:"ToDoList"
        },
    organization:{
    orgList:[]
    }
}
export let store = createStore( combineReducers ({parentList,organization}),  initialState)