import { createStore } from 'redux';
import { combineReducers } from 'redux'; 
import {OrgReducer as parentList} from '../reducer/OrgReducer'
let initialState = {
    parentList:{
        activeList:[],
        deactiveList:[],
        timeZone:[],
        countryList:[],
        listType:"Active"
    }
}

export let store = createStore( combineReducers ({parentList}),  initialState)