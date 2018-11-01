import React,{Component} from 'react';
export default function AddDataHoc(WrappedComp)
{

    return class extends Component{
        constructor(props)
        {
            super(props)
            this.state={
                enterFlag:false,
                escFlag:false
            }
            this.handleEnter=this.handleEnter.bind(this)
            this.handleEsc=this.handleEsc.bind(this)
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
        handleEsc(e)
        {
            if(e.keyCode===27)
            {
                console.log("esc pressed")
                this.setState({
                    escFlag:!this.state.escFlag
                });
            }
        }
       
        componentDidMount()
        {
            document.addEventListener("keydown",this.handleEnter)
            document.addEventListener("keydown",this.handleEsc)
        }
        componentWillUnmount()
        {
            document.removeEventListener("keydown",this.handleEnter)
            document.removeEventListener("keydown",this.handleEsc)
        }
        render()
        {
            return <WrappedComp flag={this.state.enterFlag } flag1={this.state.escFlag} {...this.props}/>
        }
        
    }

}