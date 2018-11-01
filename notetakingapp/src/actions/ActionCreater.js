import { ADD_TITLE, ADD_NOTE, DELETE_TITLE } from "../constants/ActionTypes";

export function add_title(data)
{
    return{
        type:ADD_TITLE,
        data:data
    }
}
export function add_note(index,note)
{
    console.log("at add_note action creator",index,note)
    return{
        type:ADD_NOTE,
        index:index,
        note:note
    }
}
export function delete_note(index)
{
    return{
        type:DELETE_TITLE,
        index:index
    }
}