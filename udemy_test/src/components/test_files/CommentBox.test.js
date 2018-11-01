import React from 'react';
import {mount}from 'enzyme';
import CommentBox from 'components/CommentBox';
import Root from 'Root';
// import {Provider} from 'react-redux';
// import {createStore} from 'redux';
// import reducers from 'reducers';

let wrapped;
beforeEach(()=>{
   wrapped=mount(
   <Root>
   <CommentBox/>
   </Root>)
//     <Provider store={createStore(reducers,{})}>
//    <CommentBox/>
//     </Provider>
});


it("has a textarea and button",()=>{

//console.log(wrapped.find('textarea'));
//console.log(wrapped.find('button'));
expect(wrapped.find('#text').length).toEqual(1);
expect(wrapped.find('button').length).toEqual(2);
});
afterEach(()=>{
    wrapped.unmount();
});

//=======================================================================

// it('has a text area that users can type in',()=>{
// wrapped.find('textarea').simulate('change',{target:{value:"my test comment"}})
// wrapped.update();
// expect(wrapped.find('textarea').prop('value')).toEqual("my test comment");
// });

//=========================================================================

// it("on submitting the form, text area should get emptied",()=>{
// wrapped.find('textarea').simulate('change',{target:{value:"my test comment"}});
// wrapped.update();
// wrapped.find('form').simulate('submit');
// wrapped.update();
// expect(wrapped.find('textarea').prop('value')).toEqual("");
// });

//==========================================================================
// the above two it blocks has some common functionalities.. to reduce the code , we combine them into a single describe block, which will bind the 2 it blocks
describe("text area",()=>{
    beforeEach(()=>{
        wrapped.find('textarea').simulate('change',{target:{value:"my test comment"}});
        wrapped.update();
    });
     it('has a text area that users can type in',()=>{
         expect(wrapped.find('textarea').prop('value')).toEqual("my test comment");
         //console.log(wrapped.instance('state'));
    });
    it("on submitting the form, text area should get emptied",()=>{
        wrapped.find('form').simulate('submit');
        wrapped.update();
        expect(wrapped.find('textarea').prop('value')).toEqual("");
        // console.log(wrapped.instance('state'));
    });

    });
