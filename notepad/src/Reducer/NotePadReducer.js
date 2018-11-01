import { ADD_TITLE, ADD_INFO, DELETE_TITLE } from "../constants/ActionTypes";


export function NotePadReducer(currentstate={},action)
{
switch(action.type)
{
    case ADD_TITLE:
        let temp1=Object.assign(currentstate)
        temp1[action.title]=""
       // console.log("at reducer",temp1)
        return temp1
    case ADD_INFO:
       // console.log("at actoion reducer",action.info);
        let temp=Object.assign(currentstate)
        //console.log("temp[action.tile]",action.title)
        temp[action.title]=temp[action.title]+action.info
        console.log("at addinfo reducer",temp)
        return temp
    case DELETE_TITLE:
    console.log("at deltelt title",action.title)
        let temp2=Object.assign(currentstate)
        console.log("at delete befor temp",temp2);
        delete temp2[action.title]
        console.log("at delete after temp",temp2);
        return temp2
    default:
        return currentstate
}
}