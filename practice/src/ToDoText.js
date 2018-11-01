import React,{Component} from 'react';

class ToDoText extends Component {
    constructor(props)
    {
        super()
        this.state={
            msg:''
        };
        
    }
    handleText=(e)=>
    {
        this.setState({
            msg: e.target.value
        }
    );
    }
    render()
    {
        return(
            <div>
            <input type="text" onChange={this.handleText}></input>
            <h3>{this.state.msg}</h3>
            </div>
        );
    }
}
export default ToDoText;