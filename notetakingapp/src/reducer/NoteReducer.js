import { ADD_TITLE, ADD_NOTE, DELETE_TITLE } from "../constants/ActionTypes";

export function NoteReducer(currentstate=[],action)
{
    switch(action.type)
    {
        case ADD_TITLE:
            const temp=[...currentstate]
            temp.push(action.data)
            return temp
        case ADD_NOTE:
            console.log("helo Radhikaaaaa")
            const temp1=[...currentstate]
            let obj=temp1[action.index]
            obj.note=action.note
            temp1[action.index]=obj
            console.log("at addnote reducer",temp1)
            return temp1
        case DELETE_TITLE:
            console.log("helo Radhikaaaaa",action.index)
            const temp2=[...currentstate]
            temp2.splice(action.index,1)
            return temp2
        default:
            return currentstate
    }
}