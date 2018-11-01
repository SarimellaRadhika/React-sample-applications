import {render} from "react-dom";
import React from "react";
import {Router,Route,hashHistory, IndexRedirect} from 'react-router'
import { Provider } from 'react-redux';
import { store } from  "./store/store";
import ProjectAdd from "./components/ProjectCreation";
import ProjectList from "./components/ProjectList";
import Home from "./components/Home";
import StageAdd from "./components/StageCreation";
import StageList from "./components/StageList";
import TaskList from "./components/taskList";
import TaskAdd from "./components/taskCreation";
import Stages from "./components/Stages";

//import StageCreation from "./components/StageCreation";
render(
    <Provider store={store}>
    <Router history={hashHistory}>
    <Route path="/" component={Home}>
        
        <IndexRedirect to="/ProjectList"/>
        <Route path="/ProjectList" component={ProjectList}/>
        <Route path="/Project/:projectId/StageAdd" component={StageAdd}/>
        <Route path="/Project/:projectId/StageList" component={StageList}/>
        <Route path="/Project/:projectId/StageList/:stageId/TaskList" component={TaskList}/>
        <Route path="/Project/:projectId/StageList/:stageId/TaskAdd" component={TaskAdd}/>
       
        
        <Route path="/ProjectAdd" component={ProjectAdd}/>
        

    </Route>
    </Router>
    </Provider>
   ,
    document.getElementById('app')
);
