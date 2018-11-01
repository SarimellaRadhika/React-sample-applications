import React from 'react';
//import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';
import App from 'components/App';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';
let wrapped;
beforeEach(()=>{
 wrapped=shallow(<App/>)
});
it('shows a commentbox',()=>{
//     const div=document.createElement('div');
//     ReactDOM.render(<App/>,div);
//    // console.log(div.innerHTML);
//     //expect(div.innerHTML).toContain("Comment Box component")==> not a good way to allow test file to access anothrt component innerhtml
//     expect(div.innerHTML).toContain("Comment Box component");
//     ReactDOM.unmountComponentAtNode(div);
//const wrapped=shallow(<App/>)
expect(wrapped.find(CommentBox).length).toEqual(1);
})

it('shows a commentlist',()=>{
//    const wrapped=shallow(<App/>)
    expect(wrapped.find(CommentList).length).toEqual(1);
})