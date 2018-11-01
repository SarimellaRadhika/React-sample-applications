import { SAVE_COMMENT,FETCH_COMMENTS } from "actions/types";

export default function (currentstate=[],action){
    switch(action.type)
    {
        case SAVE_COMMENT:
            return [...currentstate,action.comment]
        case FETCH_COMMENTS:
             console.log(action)
             const commentList=action.payload.data.map(comment=> comment.name)
            return [...currentstate,...commentList]
            //return currentstate
        default:
            return currentstate;
    }
}