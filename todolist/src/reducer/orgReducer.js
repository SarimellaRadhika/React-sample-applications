import { GET_ORG_LIST } from "../constants/ActionTypes";

export function orgReducer(currentstate={},action)

{
    console.log(action.type)
    switch(action.type){

        case GET_ORG_LIST:{
            console.log("at reducer",action.orglist)
            const temp=action.orglist
            return Object.assign({},currentstate,{orgList:temp})
    }
    default:
       return currentstate
}
}