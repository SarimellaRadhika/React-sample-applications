import React,{Component} from 'react';
import AddDataHoc from './AddDataHoc';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import { addStage } from '../actions/ActionCreators';
class StageAdd extends Component{
    constructor(props)
    {
        super(props);
        this.state={
            sname:"",
            sdate:"",
            stasks:null
        };
        this.getData=this.getData.bind(this);
    }

    getData(e)
    {
        this.setState({
            [e.target.name]:e.target.value
        });
    }

    componentWillReceiveProps(newProps)
    {
    // console.log("in will receive props---prev props",this.props.flag)
    // console.log("in will receive props---next props",newProps.flag)
    if(newProps.flag!==this.props.flag)
    {
       // console.log("hi")
        
         //   console.log("hiiiii")
         console.log("at stagecreation",this.props.params)
            const {sname,sdate,stasks}=this.state
            let index=this.props.params.projectId
            let data={
                sname:sname,
                sdate:sdate,
                stasks:stasks,
                tasks:[]
            }
            console.log("hello",index)
            this.props.dispatch(addStage(data,index))
            let path="/Project/"+index+"/StageList"
            this.props.router.push(path)
        
       
    }
     if(newProps.flag1!==this.props.flag1)
    {
        let index=this.props.params.projectId
        let path="/Project/"+index+"/StageList"
        
    this.props.router.push(path)
     }
    }

    render()
    {
        return(
            <div>
               *Name::: <input type="text" name="sname" onChange={this.getData}/><br/>
               Date::: <input type="date" name="sdate" onChange={this.getData}/><br/>
               No.of.stages:::<input type="number" name="stasks" onChange={this.getData}/>
               
            </div>
        );
    }
}
export default withRouter(AddDataHoc(connect(null)(StageAdd)));