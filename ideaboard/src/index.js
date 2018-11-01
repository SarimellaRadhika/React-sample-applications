import {render} from "react-dom";
import React from "react";
import { Provider } from 'react-redux';
import { store } from  "./store/store";
import IdeaBoard from "./Components/IdeaBoard";
import {Router,Route,hashHistory} from 'react-router';
import NewIdea from './Components/newIdea';
import DisplayIdea from "./Components/DisplayIdea";
render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={IdeaBoard}/>
            <Route path="/EditIdea/:id" component={NewIdea}/>
            <Route path="/NewIdea" component={NewIdea}/>

            <Route path="/DisplayIdea" component={DisplayIdea}/>
            

        </Router>
    </Provider>,
    document.getElementById('app')
);
