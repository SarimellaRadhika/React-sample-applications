import {mount} from 'enzyme';
import React from 'react';
import Root from 'Root';
import CommentList from 'components/CommentList';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import commentsReducer from 'reducers/comment';


let wrapped;
beforeEach(()=>{
    const initialState={
        comments:['test comment1','test comment2']
    }
    wrapped=mount(
        // <Root initialState={initialState}>
        //     <CommentList/>
        // </Root>
    <Provider store={createStore(commentsReducer,initialState={initialState})}>
   <CommentList/>
    </Provider>
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