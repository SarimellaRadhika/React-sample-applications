import React,{Component} from 'react';
import {Link} from 'react-router';
class BillSplittingApp extends Component{
    render(){
        return(
            <div>
               <button><Link to="/billForm">Start splitting bill</Link></button>
            </div>
        );
    }
}
export default BillSplittingApp;