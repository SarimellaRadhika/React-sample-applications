import {mount} from 'enzyme';
import React from 'react';
import Root from 'Root';
import CommentList from 'components/CommentList';

let wrapped;
beforeEach(()=>{
    const initialState={
        comments:['test comment1','test comment2']
    }
    wrapped=mount(
        <Root initialState={initialState}>
            <CommentList/>
        </Root>
    );
});
it(' creates an li element for comment',()=>{
    //console.log(wrapped.find('li').length);
    expect(wrapped.find('li').length).toEqual(2);
});

it('displays the text',()=>{
    expect(wrapped.render().text()).toContain('test comment1');
    expect(wrapped.render().text()).toContain('test comment2');
})