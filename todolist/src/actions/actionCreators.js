import { ADD_TODO, DELETE_TODO, EDIT_PRIORITY, COMPLETED, FILTER, GET_ORG_INFO, GET_ORG_LIST } from "../constants/ActionTypes";

export function add_todo(input_Data){
    return{
        type:ADD_TODO,
        input_Data:input_Data
    }
}
export function delete_todo(index){
    return{
        type:DELETE_TODO,
        index:index
    }
}
export function edit_priority(index,priority){
    return{
        type:EDIT_PRIORITY,
        index:index,
        priority:priority
    }
}
export function completed(index){
    return{
        type:COMPLETED,
        index:index
    }
}
export function filter(listType){
    return{
        type:FILTER,
        listType:listType
    }
}
export function getorglist(orglist)
{
    console.log("at action creator")
    return{
        type:GET_ORG_LIST,
        orglist:orglist
    }
}