import { ADD_MSG, DELETE_MSG, EDIT_MSG } from "../constants/ActionTypes";

export function add_msg(data){
return{
    type:ADD_MSG,
    data:data
}
}
export function delete_msg(index,data){
    return {
        type:DELETE_MSG,
        index:index,
        data:data
    }
}
export function edit_msg(index,data){
    return {
        type:EDIT_MSG,
        index:index,
        data:data
    }
}