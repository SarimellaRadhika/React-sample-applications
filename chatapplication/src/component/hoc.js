import React,{Component} from 'react';
export default function Hoc(WrappedComp)
{

    return class extends Component{
        constructor(props)
        {
            super(props)
            this.state={
                enterFlag:false
            }
            this.handleEnter=this.handleEnter.bind(this)
     
        }
        handleEnter(e)
        {
            if(e.keyCode===13)
            {
                console.log("check enter")
                this.setState({
                    enterFlag:!this.state.enterFlag
                });
            }
        }
       
        componentDidMount()
        {
            document.addEventListener("keydown",this.handleEnter)
        }
        componentWillUnmount()
        {
            document.removeEventListener("keydown",this.handleEnter)
        }
        render()
        {
            return <WrappedComp flag={this.state.enterFlag } flag1={this.state.escFlag} {...this.props}/>
        }
        
    }

}