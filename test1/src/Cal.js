import React,{Component} from 'react';
class Cal extends Component{
    constructor(props){
        super(props)
        this.state={
            operand1:"",
            operand2:"",
            result:""
        };
    }
    getInput=(e)=>
    {
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    handleAdd=()=>
    {
       let op1=this.state.operand1
       let op2=this.state.operand2
       
       let res=eval(op1+'+'+op2)
       console.log(eval(res))
        this.setState({
            result:res
        })
    }
    render(){
        return(
            <div>
                <input type="text" name="operand1" value={this.state.operand1} onChange={this.getInput}/><br/>
                <input type="text" name="operand2" value={this.state.operand2} onChange={this.getInput}/><br/>
                <button onClick={()=>{ if(this.state.operand1&&this.state.operand2) {this.handleAdd()}}}>Add</button><br/>
                {this.state.result}

            </div>
        );
    }
}
export default Cal;