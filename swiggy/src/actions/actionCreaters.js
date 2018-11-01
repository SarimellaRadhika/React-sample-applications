import { INCREMENT_COUNT, DECREMENT_COUNT} from "../constants/actionTypes";

export function increment_count(list,index){
    return{
        type:INCREMENT_COUNT,
        list:list,
        index:index
    }
}

export function decrement_count(list,index){
    return{
        type:DECREMENT_COUNT,
        list:list,
        index:index
    }
}

