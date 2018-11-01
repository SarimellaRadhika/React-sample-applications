import commentsReducer from 'reducers/comment';
import {SAVE_COMMENT} from 'constants/types';

it("handles the actions of type SAVE_COMMENT",()=>
    {
         const action={
         type: SAVE_COMMENT,
         comment:"test comment"
    };
    const newState= commentsReducer([],action);
    expect(newState).toEqual(['test comment']);
});

it("handles the action with unknown type",()=>{
    const newState=commentsReducer([],{type:"aaaa",comment:"hiii"});
    expect(newState).toEqual([]);
})