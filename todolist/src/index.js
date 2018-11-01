import {render} from "react-dom";
import React from "react";
import { Provider } from 'react-redux';
import { store } from  "./store/store";
import ToDoList from "./components/ToDoList";
import {Router, Route, hashHistory, IndexRedirect} from 'react-router';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
//import New from './components/new';
import Organization from './components/Organization';
import OrgList from './components/orgList';
import OrgInfo from "./components/OrgInfo";

render(
    <Provider store={store}>
      <Router history={hashHistory}>
      
      <Route path='/' component={Home}>    
        <Route path='/aboutus' component={AboutUs}/>
        <Route path='/contactus' component={ContactUs}/>
        <Route path='/todolist' component={ToDoList}/>
        <Route path='/Organization' component={Organization}>
                    
            <Route path='/OrgList' component={OrgList}/>
            <Route path='/Orginfo/:orgid' component={OrgInfo}/>
            <IndexRedirect to='/OrgList'/>
        </Route>

      </Route>
     
      </Router>
    </Provider>,
    document.getElementById('app')
);
