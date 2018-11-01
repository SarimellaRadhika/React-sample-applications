import {saveComment} from 'actions/actionCreater';
import {SAVE_COMMENT} from 'constants/types';

describe('saveComment',()=>{
it('has the correct type',()=>{
    const action=saveComment();
    expect(action.type).toEqual(SAVE_COMMENT);
});

it('has the correct payload',()=>{
    const action=saveComment('Test Comment');
    expect(action.comment).toEqual('Test Comment');

});

});