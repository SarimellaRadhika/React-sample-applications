import { ADD_TITLE, ADD_INFO, DELETE_TITLE } from "../constants/ActionTypes";

export function add_title(title){
    return{
        type:ADD_TITLE,
        title:title
    }
}
export function add_info(title,info){
    console.log("at addinfor",info)
    return{
        type:ADD_INFO,
        title:title,
        info:info
    }
}
export function delete_title(title){
    console.log("at deleteinfor",title)
    return{
        type:DELETE_TITLE,
        title:title
    }
}