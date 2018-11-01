import { INCREMENT_COUNT, DECREMENT_COUNT} from "../constants/actionTypes";

export function foodReducer(currentState={},action){
    switch(action.type){
        case INCREMENT_COUNT:
            let type=action.list
            let temp=currentState[type]
            //console.log("type:::::::",type)
            temp[action.index].ordered_count=temp[action.index].ordered_count+1
            currentState[type]=temp
            console.log("vxcvcxx",currentState)
            return currentState
        case DECREMENT_COUNT:
            let temp1=currentState[action.list]
            temp1[action.index].ordered_count=temp1[action.index].ordered_count+1
            currentState[action.list]=temp1
            return currentState
       
        default:
            return currentState

    }

}