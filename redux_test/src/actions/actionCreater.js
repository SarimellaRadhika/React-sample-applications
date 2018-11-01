import {SAVE_COMMENT} from 'constants/types';
//import axios from 'axios';
export function saveComment(comment){
    return{
        type:SAVE_COMMENT,
        comment:comment
    }
}
// export function fetchComment(){
//     const response=axios.get("http://jsonplaceholder.typicode.com/comments");
//     return{
//         type:FETCH_COMMENTS,
//         payload:response
//     }
// }