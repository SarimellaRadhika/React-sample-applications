import React,{Component} from 'react';
import {connect} from 'react-redux';
import { add_note } from '../actions/ActionCreater';
class Note extends Component{
    constructor(props)
    {
        super(props)
        this.handleTextarea=this.handleTextarea.bind(this);
    }

    handleTextarea(e){
        this.props.dispatch(add_note(this.props.params.id,e.target.value))
    }
    render(){
        
        return(
            <div>
                <textarea rows="20" cols="60" value={this.props.note} onChange={(e)=>this.handleTextarea(e)}/>
            </div>
        );
    }
}
function mapStateToProps(state,ownProps)
{
    console.log("at mapstatetoprops ",ownProps.params.id)
    console.log("at mapstatetoprops ---parentlist---",state.parentList)
    console.log("at mapstatetoprops note ===>",state.parentList[ownProps.params.id].note)
    return{
        note:state.parentList[ownProps.params.id].note
    }
}
export default connect(mapStateToProps)(Note);