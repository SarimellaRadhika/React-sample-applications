import React, {Component} from 'react';
class Calculator extends Component{
    constructor(props)
    {
        super()
        this.state={
            cal:["1","2","3","4","5","6","7","8","9","0","+","-","*","/","=",".","clear","back"],
            result:""
        };

    }

    handleBtn=(e)=>
    {
        if(e.target.value==="=")
        {
          let res=eval(this.state.result)
          this.setState({
              result:res
          });
        }
        else if(e.target.value==="clear")
        {
            this.setState({
                result:""
            });
        }
        else if(e.target.value==="back")
        {
           // console.log("at back",result) 
           console.log("length",this.state.result.length)
           if(this.state.result.length!==undefined){
           let temp=this.state.result.slice(0,this.state.result.length-1)
           this.setState({
               result:temp
           })
        }
        }
        else{
        let temp=this.state.result
        temp=temp+e.target.value
        this.setState({
            result:temp
        });
        }
    }
    
    render(){
        return(
            <div>

                {this.state.cal.map((val,i)=>{return <button name="btn" value={val} 
                onClick={(e)=>this.handleBtn(e)}>{val}</button>})}<br/><br/>
                <input type="text" name="calInfo" value={this.state.result}/> 

            </div>
        );
    }
}
export default Calculator;