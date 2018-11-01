import React,{Component} from 'react';
class Timer extends Component{
    constructor(props)
    {
        super()
        this.state={
            sec:0,
            min:0,
            hour:0,
            id:0,
            flag:false
        };
    }

startTimer=()=>
{
    
    this.setState({id :setInterval(()=>this.start(),1000),
    flag:true});
   // e.preventDefault();

}

stopTimer=()=>
{
    clearInterval(this.state.id)
    this.setState({
        flag:false
    });
}

resetTimer=()=>
{
    this.setState({
        sec:0,
        min:0,
        hour:0,
        flag:false
    });
    clearInterval(this.state.id)
}

start=()=>
{
    let s=this.state.sec
    let m=this.state.min
    let h=this.state.hour
    s=s+1;
    if(s===60)
    {
        s=0
        m=m+1
    }
    if(m===60)
    {
        m=0
        h=h+1
    }


    this.setState({
        sec:s,
        min:m,
        hour:h
    });
}

    render(){
        let s1=("0"+this.state.sec).slice(-2)
        let m1=("0"+this.state.min).slice(-2)
        let h1=("0"+this.state.hour).slice(-2)
        return(
            <div>
                {h1}:{m1}:{s1}<br/><br/>
                <button onClick={this.startTimer} disabled={this.state.flag}>Start</button>&nbsp;&nbsp;
                <button onClick={this.resetTimer}>Reset</button>&nbsp;&nbsp;
                <button onClick={this.stopTimer}>Stop</button>&nbsp;&nbsp;
            </div>
        );
    }
}
export default Timer;