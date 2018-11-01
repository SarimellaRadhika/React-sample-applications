import React from 'react';
//import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Forms.js';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
/*setTimeout(() => {
    ReactDOM.unmountComponentAtNode(document.getElementById('root'));}, 10000);*/

registerServiceWorker();
