import React, {Component} from 'react';
import {connect} from 'react-redux';
import { addOrg, getTime, getCountries, editOrg, filter, deactivate, activate } from '../actions/actionCreators';
import TableRow from './TableRow.js';
class ReduxOrganization extends Component{
    constructor(props)
    {
        super()
        
        this.state={
            addClick:false,
            isEdit:false,
            orgName:"",
            address:"",
            time:"",
            country:"",
            noOfEmp:"",
            phNo:"",
            revenue:"",
            index:null,
            listToPush:[],
            buttonStatus:false
           // count:0
           
        };
        this.addClick=this.addClick.bind(this);
        this.handleListType=this.handleListType.bind(this);
        this.updateFormData=this.updateFormData.bind(this);
        this.editData=this.editData.bind(this);
        this.validateFormData=this.validateFormData.bind(this);
        this.pushToList=this.pushToList.bind(this);
        this.pushToDeactive=this.pushToDeactive.bind(this);
        this.pushToActive=this.pushToActive.bind(this);
        //this.buttonStatus=this.buttonStatus.bind(this);
     
    }

   /* buttonStatus()
    {
        console.log("at buttonstatus",this.state.listToPush.length)
        let i=this.state.listToPush.length
        if(i>0){
        this.setState({
            count:i
        });
    }
    else{
        this.setState({
            count:0
        });
    }

    }*/

    componentDidMount(){
    
        fetch("http://172.26.102.81:8000/generic/time-zone/")
        .then(res=>res.json())
        .then((result)=>{this.props.dispatch(getTime(result))})

        fetch("http://172.26.102.81:8000/generic/countries/")
        .then(res=>res.json())
        .then((result)=>{this.props.dispatch(getCountries(result.response))})
        //  this.buttonStatus();
         }

       

    addClick()
    {
      this.setState({
          addClick:true
      });

    }
    validateFormData()
    {
        let txt=/^[0-9a-zA-Z]+$/
        if(this.state.orgName.trim().length>0&&this.state.address.trim().length>0&&this.state.phNo.trim().length>0)
        {
        if(!isNaN(this.state.phNo)&&this.state.phNo.length==10)
        {
           if(this.state.orgName.match(txt)){
                        
        const { orgName,address,noOfEmp,phNo,time,country,revenue}= this.state
        let data={
        orgName:orgName,
        address:address,
        time:time,
        country:country,
        noOfEmp:noOfEmp,
        phNo:phNo,
        revenue:revenue
        }
        if(this.state.isEdit)
        {
            this.props.dispatch(editOrg(this.state.index,data))
            console.log("edit")
            
        }
        else
        {
            this.props.dispatch(addOrg(data))
        
        }
        
   
        this.setState({
            addClick:false,
            isEdit:false,
            orgName:"",
            address:"",
            time:"",
            country:"",
            noOfEmp:"",
            phNo:"",
            revenue:""
           
        });
   
    }
        else{
            alert("orgname should be alphanumeric")
        }
        
        }
        else
        {
            alert("phno should be only numbers and length should be 10")
        }
   
    }
        
    else
        {
            alert("enter mandatory fields")
        }
}

    updateFormData(e)
    {
         this.setState({
            [e.target.name]:e.target.value
            });   

    }


    pushToList(i,org)
    {
    console.log("in org",org)
    let temp=this.state.listToPush
   // if(this.state.listToPush.includes(i))
   if(temp.indexOf(i)===-1){
    temp.push(i)
    temp.sort()
    }
    else{
        temp.splice(temp.indexOf(i),1)
        temp.sort()
    }
    console.log("In Push to list",temp)
    this.setState({
        listToPush:temp
        //buttonStatus:true
   });
   
   
}
  



pushToDeactive()
{
this.props.dispatch(deactivate(this.state.listToPush))
this.setState({
    listToPush:[],
    buttonStatus:false
});
}

pushToActive()
{
this.props.dispatch(activate(this.state.listToPush))
this.setState({
    listToPush:[],
    buttonStatus:false
});
}

    editData(index)
    {
      // console.log(index)
      if(this.props.listType==="Active" )
      {
      let temp=this.props.activeList[index]
            this.setState({
            orgName:temp.orgName,
            address:temp.address,
            time:temp.time,
            country:temp.country,
            noOfEmp:temp.noOfEmp,
            phNo:temp.phNo,
            revenue:temp.revenue,
            addClick:true,
            isEdit:true,
            index:index
        });
    }
    else
    {
    let temp=this.props.deactiveList[index]
          this.setState({
          orgName:temp.orgName,
          address:temp.address,
          time:temp.time,
          country:temp.country,
          noOfEmp:temp.noOfEmp,
          phNo:temp.phNo,
          revenue:temp.revenue,
          addClick:true,
          isEdit:true,
          index:index
      });
  }
    }

    handleListType(e)
    {
        this.props.dispatch(filter(e.target.value))
    }

    render()
    {
        //console.log("listtopush",this.state.listToPush)
        return(
            <div>

                <button onClick={this.addClick}>Add</button>&nbsp;&nbsp;&nbsp;

                {this.state.listToPush.length>0?
               
                this.props.listType==="Active" ? <button onClick={this.pushToDeactive}>Deactive</button>
                :
               <button onClick={this.pushToActive}>Active</button>
            
                :
                <div></div>
                }

                &nbsp;&nbsp;&nbsp;
                <select name="buttonDropdown" onChange={this.handleListType}>
            
                <option>Active</option>
                <option>Deactive</option>
                </select>
            {this.state.addClick
            ?
            <section>
            <br/>
            <br/>
            <br/>
         
            *OrganizationName:<input type="text"name="orgName" value={this.state.orgName} onChange={this.updateFormData} disabled={this.state.isEdit}/><br/>
            *Address:<input type="textarea" name="address" value={this.state.address} onChange={this.updateFormData}/><br/>
            TimeZone<select name="time" value={this.state.time} onChange={this.updateFormData}>
            {this.props.timeZone.map((time,i)=>
             <option>{time.code+time.name}</option>)}
            </select><br/>
            Country:<select name="country" value={this.state.country} onChange={this.updateFormData}>
            {this.props.countryList.map((country,i)=>
             <option>{country.name}</option>)}
            </select><br/>
            No.of.emp:<input type="number" name="noOfEmp" value={this.state.noOfEmp} onChange={this.updateFormData}/><br/>
            *PhoneNo:<input type="number" name="phNo" value={this.state.phNo} onChange={this.updateFormData}/><br/>
            Revenue:<input type="text" name="revenue" value={this.state.revenue} onChange={this.updateFormData}/><br/>
            <button onClick={this.validateFormData}>Submit</button>
            </section>
            :
            
           
            this.props.listType==="Active" ?
           <table><tbody>
           <tr>
           <td>orgName</td>&nbsp;&nbsp;&nbsp;<td>address</td>&nbsp;&nbsp;&nbsp;<td>time</td>&nbsp;&nbsp;&nbsp;
           <td>country</td>&nbsp;&nbsp;&nbsp;<td>noOfEmp</td>&nbsp;&nbsp;&nbsp;<td>phNo</td>&nbsp;&nbsp;&nbsp;<td>revenue</td></tr>
           {this.props.activeList.map((value,i)=><TableRow key={i+value.orgName} index={i} data={value} editData={this.editData} pushToList={this.pushToList}/>)}
           </tbody></table>
            :
            <table><tbody>
           {this.props.deactiveList.map((value,i)=><TableRow key={i+value.orgName} index={i} data={value} editData={this.editData} pushToList={this.pushToList}/>)}
           </tbody></table>
           
          
           
            }

            </div>
        );
    }
}
function storeToProps(state)
{
    
    return{
        timeZone:state.parentList.timeZone,
        activeList:state.parentList.activeList,
        countryList:state.parentList.countryList,
        listType:state.parentList.listType,
        deactiveList:state.parentList.deactiveList
    }
}
export default connect(storeToProps)(ReduxOrganization);