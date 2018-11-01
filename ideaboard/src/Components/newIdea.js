import React, {Component} from 'react';
import hoc from '../Components/hoc';
import { add_Idea, edit_Idea } from '../Actions/ActionCreater';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
class NewIdea extends Component{
    constructor(props)
    {
        super(props)
        this.state={
            title:"",
            desc:"",
            editIndex:this.props.params.id
        };
        this.handleData=this.handleData.bind(this)
        this.handleEdit=this.handleEdit.bind(this)
    }

    componentWillReceiveProps(newProps)
    {
        console.log("At component will receive props")
        if(newProps.flag!==this.props.flag)
        { 
            console.log("enter pressed")
            const {title,desc}=this.state
            let data={
                title:title,
                desc:desc,
                date:new Date()
               }
            console.log("data at newidea",data)
        if(this.state.editIndex!==undefined){
            this.props.dispatch(edit_Idea(this.state.editIndex,data))
        }
        else{
        this.props.dispatch(add_Idea(data))
        }
        this.props.router.push("/")
        }
       console.log("at edit form", this.props.params.id)
    }

    componentDidMount()
    {
       // console.log("at did mount",this.props.params.id)
       if(this.state.editIndex!==undefined)
       {
        
       // console.log("at did mount",temp)
        this.handleEdit()   
       }
    }

    handleEdit()
    {
        let temp=this.props.ideaList[this.props.params.id]
        this.setState({
            title:temp.title,
            desc:temp.desc
        });
    }

    handleData(e)
    {
        //console.log("at edit form handle data", this.props.params.id)
        this.setState({
            [e.target.name]:e.target.value
        });
    }

    render()
    {
        console.log("at edit form render", this.props.params.id)
        return(
            <div>
                <h2>... Add New Idea ...</h2>
                Title:::<input type="text" name="title" value={this.state.title} onChange={(e)=>this.handleData(e)}/><br/><br/>
                Desc:::<textarea rows="2" cols="25" name="desc" value={this.state.desc} onChange={(e)=>this.handleData(e)}/>
                
            </div>
        );
    }
}
function mapStateToProps(state)
{
    //console.log("At newidea", state.parentList.ideaList[0])
    return {
       ideaList: state.parentList.ideaList
    }
   
}
export default withRouter(hoc(connect(mapStateToProps)(NewIdea)))
