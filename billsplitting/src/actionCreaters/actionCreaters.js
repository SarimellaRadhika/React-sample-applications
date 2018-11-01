import { ADD_MEMBER, DELETE_MEMBER, EDIT_MEMBER, SPLIT_BILL } from "../constants/actionTypes";

export function add_member(data){
    return{
        type:ADD_MEMBER,
        data:data
    }
}

export function delete_member(index){
    return{
        type:DELETE_MEMBER,
        index:index
    }
}
export function edit_member(index,total){
    return{
        type:EDIT_MEMBER,
        index:index,
        total:total
    }
}
export function split_bill(total){
    return{
        type:SPLIT_BILL,
        total:total
    }
}