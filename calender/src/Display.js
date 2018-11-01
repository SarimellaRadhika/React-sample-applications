import React,{Component} from 'react';
import hoc from './hoc';
class Display extends Component{
    constructor(props){
        super(props)
        this.state={
            Appointment:"",
            startHr:"",
            startMin:"00",
            endHr:"",
            endMin:"00",
            dataObj:{},
            index:""
        };
    }
    // handleClick=()=>
    // {
    //     let flag=false
    //     this.props.getFormData(flag)
      
    // }
    componentDidMount()
    {
        
        let d=new Date()
        let b=d.getMonth()+1
        let a=d.getDate()+"-"+b+"-"+d.getFullYear()
        console.log("at display",a)
        let hrs=d.getHours()
        let endmin=d.getMinutes()+1
        let min=d.getMinutes()
        console.log("at display",this.props.date)
        if(this.props.date===a){
            this.setState({
                startHr:hrs,
                startMin:min,
                endHr:hrs,
                endMin:endmin
            });
        }
    
    }
    getData=(e)=>
    {
        this.setState(
        {[e.target.name]:e.target.value}
    );

    }
    handleSubmit=()=>
    {
        let flag=false
        //this.props.getFormData(flag)
        const {Appointment,startHr,startMin,endHr,endMin}=this.state
        if(Appointment!==""&&startHr!==""&&endHr!==""){
         let data={
             Appointment:Appointment,
             startHr:startHr,
             startMin:startMin,
             endHr:endHr,
             endMin:endMin
         }
         this.setState({
             Appointment:"",
             startHr:"",
             startMin:0,
             endHr:"",
             endMin:0
         });
         this.props.getFormData(data,flag)
         console.log("at handle submit of display",data)
         console.log("at handle submit for index",this.props.index)
    }
    else{
        alert("please fill all the fields")
    }
    }

    render()
    {
        let arr=[]
        let a=this.state.startHr
        let b=this.state.startMin
        for(let i=a;i<=24;i++)
        {
            arr.push(i)
        }
        let arr2=[]
        for(let j=b;j<60;j++)
        {
            arr2.push("0"+j)
        }
        return(
            <div>
                {/* <button onClick={this.handleClick}>Go back</button><br/><br/> */}
                Appointment::<input type="text" name="Appointment" value={this.state.Appointment} onChange={this.getData}/><br/><br/>
                Start Time::<select name="startHr" value={this.state.startHr} onChange={this.getData}>{arr.map((val,i)=>{return <option>{val}</option>})}
                </select>Hrs&nbsp;&nbsp;&nbsp;<select name="startMin" value={this.state.startMin} onChange={this.getData}>{arr2.map((val,i)=>{return <option>{val.slice(-2)}</option>})}
                </select>Min<br/><br/>
                End Time::<select name="endHr" value={this.state.endHr} onChange={this.getData}>{arr.map((val,i)=>{return <option>{val}</option>})}
                </select>Hrs&nbsp;&nbsp;&nbsp;<select name="endMin" value={this.state.endMin} onChange={this.getData}>{arr2.map((val,i)=>{return <option>{val.slice(-2)}</option>})}
                </select>Min
                <br/><br/>
                <button onClick={this.handleSubmit}>Submit</button>
                
                
            </div>
        );
    }
}
export default hoc(Display);