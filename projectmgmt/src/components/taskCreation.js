import React,{Component} from 'react';

import AddDataHoc from './AddDataHoc.js';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import { addTask } from '../actions/ActionCreators.js';
//import {Link} from 'react-router' 
//import ProjectList from './ProjectList';
class TaskAdd extends Component{
    constructor(props)
    {
        super();
        this.state={
            tname:"",
            tdate:""
          
        };
        this.getData=this.getData.bind(this)
       // this.handleBack=this.handleBack.bind(this)
    }
    getData(e)
    {
        this.setState({
            [e.target.name]:e.target.value
        });
    }

    componentWillReceiveProps(newProps)
    {
    console.log("in will receive props---prev props",this.props.flag)
    console.log("in will receive props---next props",newProps.flag)
    const pid=this.props.params.projectId
    const sid=this.props.params.stageId
    const path="/Project/"+pid+"/StageList/"+sid+"/TaskList"
    if(newProps.flag!==this.props.flag&&this.state.pname!=="")
    {
       
            const {tname,tdate}=this.state
            let data={
                tname:tname,
                tdate:tdate
                }
         
            
            
           
            console.log("at task creation pid==>",pid)
            console.log("at task creation sid==>",sid)
           // this.props.dispatch(addTask(data,pid,sid))
            
            this.props.router.push(path)
            this.props.dispatch(addTask(data,pid,sid))   
        }   
    if(newProps.flag1!==this.props.flag1)
    {
    this.props.router.push(path)
     }
    }
    render()
    {
        return(
            <div>
               *Name::: <input type="text" name="tname" onChange={this.getData}/><br/>
               Date::: <input type="date" name="tdate" onChange={this.getData} />
            </div>
            );
    }
}

export default withRouter(AddDataHoc(connect(null)(TaskAdd)))
