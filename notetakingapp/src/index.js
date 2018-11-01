import {render} from "react-dom";
import React from "react";
import {Route,Router,hashHistory} from 'react-router';
import { Provider } from 'react-redux';
import { store } from  "./store/store";
import NotePad from "./component/NotePad";
import Note from "./component/Note";
render(
    <Provider store={store}>
       <Router history={hashHistory}>
            <Route path="/" component={NotePad}>
                <Route path="/Notepad/:id" component={Note}/>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('app')
);
