import { SAVE_COMMENT,FETCH_COMMENTS } from "constants/types";

export function commentsReducer(currentstate=[],action){
    switch(action.type)
    {
        case SAVE_COMMENT:
            return [...currentstate,action.comment]
        case FETCH_COMMENTS:
           //console.log(action.payload.data)
             const commentList=action.payload.data.map(comment=> comment.name)
             return [...currentstate,...commentList]
        default:
            return currentstate;
    }
}