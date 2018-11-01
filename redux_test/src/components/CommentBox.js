import React,{Component} from 'react';
import {connect} from 'react-redux';
import { saveComment } from 'actions/actionCreater';
//import * as actions from 'actions';

//functional component
// export default ()=>{
//     return <div> Comment Box component </div>;
// }
class CommentBox extends Component{
state={ comment:''};
handleTextarea=(e)=>
{
    this.setState({comment:e.target.value})
}
handleSubmit=(e)=>
{
    e.preventDefault();//prevents form to de auto submit
    this.props.dispatch(saveComment(this.state.comment))
    this.setState({comment:""})
}
render(){
    return(
        <div>
        <form onSubmit={this.handleSubmit}>
            <h3>Add a comment</h3>
            <textarea id="text" onChange={this.handleTextarea} value={this.state.comment}/>
            <div>
                <button>Add comment</button>
            </div>
        </form>
        <button onClick={this.props.fetchComment}>Fetch Comments</button>
        </div>
    )
}
}
export default connect(null)(CommentBox);