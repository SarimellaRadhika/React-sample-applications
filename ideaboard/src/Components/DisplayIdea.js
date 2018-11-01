import React,{Component} from 'react';
import {connect} from 'react-redux';
import { delete_Idea } from '../Actions/ActionCreater';
import {withRouter} from 'react-router';
import {Link} from 'react-router';
class DisplayIdea extends Component{
    constructor(props)
    {
        super(props)
        this.handleDelete=this.handleDelete.bind(this)
       // this.handleEdit=this.handleEdit.bind(this)
    }

    handleDelete(i)
    {
        console.log("at handledelete",i)
        this.props.dispatch(delete_Idea(i));
    }

    // handleEdit(i)
    // {
       
    // }

    render()
    {
        return(
            <div>
                <table>
                    <tbody>
                        <tr>
                            <td>Idea</td>&nbsp;&nbsp;&nbsp;<td>IdeaDescription</td>&nbsp;&nbsp;&nbsp;
                            <td>EditIdea</td>&nbsp;&nbsp;&nbsp;<td>DeleteIdea</td>&nbsp;&nbsp;&nbsp;
                        </tr>
                {this.props.ideaList.map((val,i)=>{return <tr><td>{val.title}</td>&nbsp;&nbsp;&nbsp;<td>{val.desc}</td>&nbsp;&nbsp;&nbsp;
                <td><button><Link to="/NewIdea:">EditIdea</Link></button></td>&nbsp;&nbsp;&nbsp;<td><button onClick={()=>this.handleDelete(i)}>DeleteIdea</button></td>&nbsp;&nbsp;&nbsp;</tr>})}
                    
                    </tbody>
                </table>
            </div>
        );
    }
}
function mapStateToProps(state)
{
    return{
        ideaList:state.parentList.ideaList
    }
}
export default withRouter(connect(mapStateToProps)(DisplayIdea))