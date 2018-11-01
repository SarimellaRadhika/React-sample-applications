import {render} from "react-dom";
import React from "react";
import { Provider } from 'react-redux';
import { store } from  "./store/store";
import {Router,Route,hashHistory} from 'react-router'
import Home from './components/home'
import About from "./components/about";
import ContactUs from "./components/ContactUs.JS";
render(
    <Provider store={store}>
       <Router history={hashHistory}>
        <Route path="/" component={Home}/>
        <Route path="/About" component={About}/>
        <Route path="/ContactUs" component={ContactUs}/>
       
       </Router>
    </Provider>,
    document.getElementById('app')
);
