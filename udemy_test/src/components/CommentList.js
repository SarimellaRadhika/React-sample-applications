import React,{Component} from 'react';
import {connect} from 'react-redux';
//fuunctional component
// export default ()=>{
//     return <div>Comment List Component</div>;
// }

// class based component

class CommentList extends Component{
    renderComments(){
        return this.props.comments.map(comment=>{
            return <li key={comment}>{comment}</li>
        });
    }
    render(){
       
        return(
            <div>
                <ul>
                    {this.renderComments()}
                </ul>
            </div>
        );
    }
}
function mapStateToProps(state){
    console.log("at mapstatetoprops",state.comments)
    return{
        comments:state.comments
    }
}
export default connect(mapStateToProps)(CommentList);