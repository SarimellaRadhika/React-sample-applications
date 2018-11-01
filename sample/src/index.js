import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import ShoppingList from './App.js';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<ShoppingList name="Radhika" />, document.getElementById('root'));
registerServiceWorker();
