import React,{Component} from 'react';
import Calendar from 'react-calendar';
//import {withRouter} from 'react-router';
import Display from './Display';
class CalenderApp extends Component{
    constructor(props)
    {
        super(props)
        this.state={
            flag:false,
            date:"",
            dataObj:{}
        }
    }
handleCalender=(date)=>
{
    console.log("at calender",typeof(date))
    let b=date.getMonth()+1
    let a=date.getDate()+"-"+b+"-"+date.getFullYear()
    console.log("date::::",a)
    //console.log("getdate",d.getMinutes())
    this.setState({
        date:a
    });
}

handleDelete=(i)=>
{
    let temp=this.state.dataObj
    temp[this.state.date].splice(i,1)
    this.setState({
        dataObj:temp
    });
}

handleEdit=(i)=>
{

}

changeFlag=()=>
{
    if(this.state.date!=="")
    {
    this.setState({
        flag:true
    });
    }
    else{
        alert("please select the date")
    }
}
   // this.props.router.push("/Display")
   getFormdata=(data,flag)=>
    {
        const {dataObj,date}=this.state
        let temp={[date]:[],...dataObj}
        temp[date].push(data)
        this.setState({
            flag:flag,
            dataObj:temp
        });
       // console.log("At calender app of state object",dataObj)
    }


render(){
    console.log("At calender app of state object",this.state.dataObj)
    let temp=this.state.dataObj[this.state.date]

    return(
        <div>
           
            {this.state.flag===true ?<Display date={this.state.date} getFormData={this.getFormdata}/>
            :
            <div>
            <Calendar onChange={this.handleCalender} minDate={new Date()}/>
            <button onClick={this.changeFlag}>Add Appointement</button>
           { temp!==undefined&&temp.length!==0 ?
            <table>
                <tbody>
                    <tr><td>Appointement</td>&nbsp;&nbsp;&nbsp;<td>Start Time</td>&nbsp;&nbsp;&nbsp;<td>End Time</td>&nbsp;&nbsp;&nbsp;</tr>
                    {temp.map((val,i)=>{return<tr><td>{val.Appointment}</td>&nbsp;&nbsp;&nbsp;
                     <td>{val.startHr}:{val.startMin}</td>&nbsp;&nbsp;&nbsp;<td>{val.endHr}:{val.endMin}</td>&nbsp;&nbsp;&nbsp;
                     <td><button onClick={()=>this.handleDelete(i)}>Delete</button></td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                     </tr> })   
                    }
                </tbody>
            </table>
            :
            <div>No Appointements</div>
        }

            </div>}
        </div>
    );
}
}
export default CalenderApp;
//export default withRouter(CalenderApp);