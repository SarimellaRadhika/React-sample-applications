import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Parentclass from './Parent';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Parentclass />, document.getElementById('root'));
registerServiceWorker();
