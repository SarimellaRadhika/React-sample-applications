import React,{Component} from 'react';
import {Link} from 'react-router'
import NavLink from './NavLink';
class Home extends Component{
    render()
    {
        return(
            <div>
            <ul role="nav">
            <Link to="/aboutus" activeClassName="active">Aboutus</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <NavLink to="/contactus">Contactus</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to="/todolist" activeStyle={{color:'violet'}}>Todolist</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to='/organization' activeStyle={{color:'violet'}}>Organization</Link>
            </ul>
            <hr/>
            {this.props.children}
            
            </div>
        );
    }
}
export default Home;