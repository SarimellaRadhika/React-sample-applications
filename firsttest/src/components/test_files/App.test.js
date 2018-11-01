import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';

it('shows a commentbox',()=>{
    const div=document.createElement('div');
    ReactDOM.render(<App/>,div);
   // console.log(div.innerHTML);
    //expect(div.innerHTML).toContain("Comment Box component")==> not a good way to allow test file to access anothrt component innerhtml
    expect(div.innerHTML).toContain("Comment Box component");
    ReactDOM.unmountComponentAtNode(div);
})