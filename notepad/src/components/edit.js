import React,{Component} from 'react';
import {connect} from 'react-redux';
import { add_info } from '../actions/ActionCreator';
class Edit extends Component{
    constructor(props)
    {
        super(props)
       
        this.handleTextarea=this.handleTextarea.bind(this)
    }
    handleTextarea(e)
    {

        console.log("at textarea",e.target.value)
        // this.setState({
        //     data:e.target.value
        // });
        this.props.dispatch(add_info(this.props.params.title,e.target.value))
    }

    render(){
        console.log("at render",this.props.params.title)
        console.log("at edit",this.props.note)
        let style1={float:"right",
                    padding:50}
     
    
        return(
            <div style={style1}>
                <textarea rows="15" cols="50" value={this.props.note} onChange={this.handleTextarea}/>
                
            </div>
        );
    }
}
function mapStateToProps(store,newProps)
{
    console.log("at map state to props",store)
    return{
        note:store.noteObj[newProps.params.title]
    }
}
export default connect(mapStateToProps)(Edit)