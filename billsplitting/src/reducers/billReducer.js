import { ADD_MEMBER, DELETE_MEMBER, EDIT_MEMBER, SPLIT_BILL } from "../constants/actionTypes";

export function billReducer(currentstate={},action){
switch(action.type){
    case ADD_MEMBER:
       const temp=[...currentstate]
        temp.push(action.data)
        return temp
    case DELETE_MEMBER:
        const temp1=[...currentstate]
        temp1.splice(action.index,1)
        return temp1
    case EDIT_MEMBER:
        const temp2=[...currentstate]
        temp2[action.index].amount=action.total
        //console.log("at reducer",temp2[action.index].amount)
        return temp2
    case SPLIT_BILL:
            let  temp3=[...currentstate]
            let len=temp3.length
            let p=action.total/len
            temp3.map((val,i)=>val.amount=(val.amount-p))
            console.log("at reducer",temp3)
            return temp3
    default:
        return currentstate
}
}