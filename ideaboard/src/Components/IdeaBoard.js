import React,{Component} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import { delete_Idea, filter_Idea } from '../Actions/ActionCreater';
//import './idea.css';
class IdeaBoard extends Component{

constructor(props)
{
    super(props)
    this.handleDelete=this.handleDelete.bind(this)
    this.handleSort=this.handleSort.bind(this)
}

   handleSort(e)
   {
    this.props.dispatch(filter_Idea(e.target.value))
   }
   handleDelete(i)
    {
        console.log("at handledelete",i)
        this.props.dispatch(delete_Idea(i));
    }

    render()
    { 
       let style1={
                background:"blue"   ,
                padding:30,
                display:"grid",
                gap:10
        }
       let style2={
        display:"block",
        float:"left",
        background:"pink",           
        // width:150,
        // height:150,
        margin:30,
        padding:20,
        color:"green"
           
       }
        return(
            <div>
                <Link to="/NewIdea"><button>NewIdea</button></Link>&nbsp;&nbsp;&nbsp;
                <select onChange={(e)=>this.handleSort(e)}>
                    <option>sort by date</option>
                    <option>sort by title</option>
                </select>
                <div style={style1}>
                    
                        {/* <tr>
                            <td>Idea</td>&nbsp;&nbsp;&nbsp;<td>IdeaDescription</td>&nbsp;&nbsp;&nbsp;
                            <td>EditIdea</td>&nbsp;&nbsp;&nbsp;<td>DeleteIdea</td>&nbsp;&nbsp;&nbsp;
                        </tr> */}
                {/* {this.props.ideaList.map((val,i)=>{let path="/EditIdea/"+i
                return <tr><td>{val.title}</td>&nbsp;&nbsp;&nbsp;<td>{val.desc}</td>&nbsp;&nbsp;&nbsp;
                <td><button><Link to={path}>EditIdea</Link></button></td>&nbsp;&nbsp;&nbsp;<td><button onClick={()=>this.handleDelete(i)}>DeleteIdea</button></td>&nbsp;&nbsp;&nbsp;</tr>})} */}
                    {this.props.ideaList.map((val,i)=>{let path="/EditIdea/"+i
                    return <div key={i} style={style2}><button><Link to={path}>EditIdea</Link></button>&nbsp;&nbsp;&nbsp;
                            <button onClick={()=>this.handleDelete(i)}>DeleteIdea</button><br/>
                            Idea Title::{val.title}<br/>
                            Idea Description::{val.desc}
                           
                            </div>

                           })
                    }
                    
                </div>
           </div>
           
        );
    }
}
function mapStateToProps(state)
{
    return{
        ideaList:state.parentList.ideaList
    }
   // console.log("at mapStatetoprops",ideaList[0])
}
export default connect(mapStateToProps)(IdeaBoard);
