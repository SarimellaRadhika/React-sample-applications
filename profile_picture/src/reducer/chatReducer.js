import { ADD_MSG, DELETE_MSG, EDIT_MSG } from "../constants/ActionTypes";
 
export function chatReducer(currentstate=[],action){
switch(action.type)
{
    case ADD_MSG:
        const temp=[...currentstate]
        temp.push(action.data)
        console.log("at reducer",temp)
        return temp
    case DELETE_MSG:
        const temp1=[...currentstate]
        temp1[action.index].msg=""
        temp1[action.index].time=action.time
        console.log("at reducer", temp1)
        return temp1
    case EDIT_MSG:
        const temp2=[...currentstate]
        temp2[action.index].msg=action.data.msg
        temp2[action.index].time=action.data.time
        console.log("at reducer", temp2)
        return temp2
    default:
        return currentstate
}
}