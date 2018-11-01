import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import {store} from './store/store';
import {Router, Route,hashHistory} from 'react-router';
import Home from './components/home';
import SignIn from './components/signin';
import Veg from './components/veg';
import Nonveg from './components/nonveg';
import Tiffin from './components/tiffin';
import Snacks from './components/snacks';
import Cart from './components/cart';
ReactDOM.render(
<Provider store={store}>
    <Router history={hashHistory}>
        <Route path='/' component={App}>
            <Route path="/home" component={Home}>
                <Route path="/home/cart" component={Cart}/> 
            </Route>
            <Route path="/signin" component={SignIn}>
                <Route path="/signin/cart" component={Cart}/> 
            </Route>
            <Route path="/veg" component={Veg}>
                <Route path="/veg/cart" component={Cart}/> 
            </Route>
            <Route path="/nonveg" component={Nonveg}>
                <Route path="/nonveg/cart" component={Cart}/> 
            </Route>
            <Route path="/tiffins" component={Tiffin}>
                <Route path="/tiffins/cart" component={Cart}/>
            </Route>
            <Route path="/snacks" component={Snacks}>
                <Route path="/snacks/cart" component={Cart}/>
            </Route>
            
        </Route>
    </Router>


</Provider>, 
document.getElementById('root'));
// registerServiceWorker();
