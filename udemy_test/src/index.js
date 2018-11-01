import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/App';
import Root from 'Root';
// import {Provider} from 'react-redux';
// import {createStore} from 'redux';
// import reducers from 'reducers';

ReactDOM.render(
<Root>
    <App/>
</Root>,
document.querySelector('#root')
);