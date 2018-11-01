import {render} from "react-dom";
import React from "react";
import { Provider } from 'react-redux';
import { store } from  "./store/store";
import {Router,Route,hashHistory,IndexRoute} from 'react-router';
import NotePad from "./components/NotePad";
//import Edit from "./components/edit";
import Sample from "./components/Sample";
render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={NotePad}>
                {/* <IndexRoute to="/notepad" component={NotePad}/>
                <Route path="/notepad" component={NotePad}/> */}
                <Route path="/:title/edit" component={Sample}/>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('app')
);
