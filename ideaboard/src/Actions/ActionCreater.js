import { ADD_IDEA, DELETE_IDEA, EDIT_IDEA, FILTER_IDEA } from "../Constants/ActionTypes";

export function add_Idea(data)
{
    //console.log("At action creater")
    return{
        
        type:ADD_IDEA,
        data:data
    }
}
export function delete_Idea(index)
{
    console.log("At delete action creater")
    return{
        
        type:DELETE_IDEA,
        index:index
    }
}
export function edit_Idea(index,data)
{
    //console.log("At action creater")
    return{
        
        type:EDIT_IDEA,
        index:index,
        data:data
    }
}
export function filter_Idea(sortType)
{
    //console.log("At action creater")
    return{
        
        type:FILTER_IDEA,
        sortType:sortType
    }
}