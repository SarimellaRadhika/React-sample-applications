import React,{Component} from 'react';
import { connect } from 'tls';
class EditIdea extends Component{
    constructor(props)
    {
        super(props)
        this.state={
            idea:"",
            desc:""
        };
    }
    render(){
        return(
            <div>

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
export default connect(mapStateToProps)(EditIdea)