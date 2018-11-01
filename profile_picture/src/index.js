import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import ChatApp from './components/ChatApp';
import {store} from './store/Store';
import {Provider} from 'react-redux';


ReactDOM.render(
<Provider store={store}>
<ChatApp />
</Provider>, 
document.getElementById('root'));
registerServiceWorker();
