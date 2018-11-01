import React,{Component} from 'react';
export default function todoHoc(WrappedComp)
{

    return class extends Component{
        constructor(props)
        {
            super(props)
            this.state={
                enterFlag:false
            }
        }
        handleEnter=(e)=>
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
            return <WrappedComp flag={this.state.enterFlag}/>
        }
        
    }

}