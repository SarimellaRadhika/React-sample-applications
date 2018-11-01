import {render} from "react-dom";
import React from "react";
import { Provider } from 'react-redux';
import {Router,Route,hashHistory} from 'react-router'
import { store } from  "./store/store";
import BillSplittingApp from "./components/bill";
import Form from "./components/form";
render(
    <Provider store={store}>
        <Router history={hashHistory}>
        <Route path="/" component={BillSplittingApp}/>
        <Route path="/billForm" component={Form}/>
       </Router>
    </Provider>,
    document.getElementById('app')
);
