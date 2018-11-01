import React, { Component } from 'react';
import TableRow from './TableRow.js';
class Organization extends Component{
    constructor(props)
    {
        super()
        this.state={
            listToPush:[],
            dataList:[],
            deactiveList:[],
            addClick:false,
            countriesList:[],
            timeZone:[],
            country:"",
            time:"",
            orgName:"",
            address:"",
            noOfEmp:"",
            phNo:"",
            revenue:"",
            isEdit:false,
            index:null
        };
    }

componentDidMount(){
    
        fetch("http://172.26.102.204:8000/generic/time-zone/")
        .then(res=>res.json())
        .then(
            (result)=>{
              //  result.map((name,i)=>
              // console.log(name.code)
              //  temp1.push(name.code))

              this.setState(
                  {timeZone:result}
              )
            
            });
           
            fetch("http://172.26.102.204:8000/generic/countries/")
            .then(res=>res.json())
            .then(
                (result)=>{
                   // result1.response.map((name,i)=>
                
                    
    
                this.setState(
                     {countriesList:result.response}
                  );
                
                });
    }
updateData=(e)=>
{
    
   this.setState(
    {[e.target.name]:e.target.value});
}    

editData=(i)=>
{
    console.log(this.state.dataList[i])
    let temp=this.state.dataList[i]
    console.log(temp.Name)
    this.setState({
        index:i,
        isEdit:true,
        country:temp.countrycode,
        time:temp.timeZone,
        orgName:temp.Name,
        address:temp.add,
        noOfEmp:temp.noemp,
        phNo:temp.phone,
        revenue:temp.revenue,
        addClick:true,
        buttonDropdown:null
        
    });
}

listToPush=(i)=>
{
    console.log("index is",i)
    let temp=this.state.listToPush
    temp.push(i)
    temp.sort()
    this.setState({
        listToPush:temp
    });
}


getData=()=>
{
  //  console.log(this.state.orgName.trim().length)
   // console.log(this.state.address.trim().length)
    //console.log(this.state.noOfEmp)
    if(this.state.orgName.trim().length>0&&this.state.address.trim().length>0&&this.state.noOfEmp.trim().length>0)
    {
    const {orgName,address,noOfEmp,phNo,country,time,revenue}=this.state
    const data={
            Name:orgName,
            add:address,
            noemp:noOfEmp,
            phone:phNo,
            timezone:time,
            countrycode:country,
            revenue:revenue
           }
        //console.log(data)
    let tempData=this.state.dataList
    if(this.state.isEdit)
    {
        tempData[this.state.index]=data
    }
    else{
    tempData.push(data)
    }
    
    this.setState(
        {
            index:null,
            dataList:tempData,
            country:"",
            time:"",
            orgName:"",
            address:"",
            noOfEmp:"",
            phNo:"",
            revenue:"",
            addClick:false,
            isEdit:false

        }
    );
    }
    else(alert("Please fill mandatory fields"))

}

displayForm=()=>
{
    this.setState(
        {addClick:true}
    );
}

pushToDeactivate=()=>
{
    
/*let temp=this.state.deactiveList
let temp1=this.state.dataList
temp.push(temp1[i])
temp1.splice(i,1)
this.setState({
   deactiveList:temp ,
   dataList:temp
   
});*/
console.log("onclick of deactive")
console.log("onclick of deactive"+this.state.listToPush)
let temp=this.state.deactiveList
let temp1=this.state.dataList
let k=this.listToPush.length
for(let i=0;i<k;i++)
{
    //let temp=this.state.deactiveList
    //let temp1=this.state.dataList
    temp.push(temp1[this.state.listToPush[i]])
   // temp1.splice(this.state.listToPush[i],1)
    //this.setState({
    //   deactiveList:temp,
    //   dataList:temp1
       
   // }); 
}
for(let i=k-1;i>=0;i--)
{
   // let temp=this.state.deactiveList
   // let temp1=this.state.dataList
   // temp.push(temp1[this.state.listToPush[i]])
    temp1.splice(this.state.listToPush[i],1)
   /* this.setState({
       deactiveList:temp,
       dataList:temp1
       
    }); */
}
this.setState({
    listToPush:[],
    deactiveList:temp,
    dataList:temp1
    
});
}

pushToActive=()=>
{
    console.log("onclick of active")
    let temp1=this.state.dataList
    let temp=this.state.deactiveList
    let k=this.listToPush.length
    for(let i=0;i<k;i++)
    {
   // let temp1=this.state.dataList
   // let temp=this.state.deactiveList
    temp1.push(temp[this.state.listToPush[i]])
    /*temp.splice(this.state.listToPush[i],1)
    this.setState({
        dataList:temp1,
        deactiveList:temp
    });*/

    }
    for(let i=k-1;i>=0;i--)
    {
        temp.splice(this.state.listToPush[i],1)
    }
    this.setState({
        pushToList:[],
        dataList:temp1,
        deactiveList:temp
    });
}

    render()
    {
        console.log(this.state.orgName)
        return(
            <div>
            
            <button onClick={this.displayForm}>Add</button>&nbsp;&nbsp;&nbsp;&nbsp;
            <select name="buttonDropdown" value={this.state.buttonDropdown} onChange={this.updateData}>
            <option></option>
            <option>Active</option>
            <option>Deactive</option>
            </select>
            {this.state.buttonDropdown==="Active"?
            <div>
                <button onClick={this.pushToDeactivate}>Deactivate</button>
                <table><tbody>{this.state.dataList.map((value,i)=><TableRow index={i} data={value} editData={this.editData} pushToList={this.listToPush}/>)}</tbody></table>
            </div>
            :
            <div>
            <button onClick={this.pushToActive}>Activate</button>
            <table><tbody>{this.state.deactiveList.map((value,i)=><TableRow index={i} data={value} editData={this.editData} pushToList={this.listToPush}/>)}</tbody></table>

            </div>}
            {this.state.addClick
            ?
            <section>
            <br/>
            <br/>
            <br/>
         
            *OrganizationName:<input type="text"name="orgName" value={this.state.orgName} onChange={this.updateData}/><br/>
            *Address:<input type="textarea" name="address" value={this.state.address} onChange={this.updateData}/><br/>
            TimeZone<select name="time" value={this.state.time} onChange={this.updateData}>
            {this.state.timeZone.map((time,i)=>
             <option>{time.code+time.name}</option>)}
            </select><br/>
            Country:<select name="country" value={this.state.country} onChange={this.updateData}>
            {this.state.countriesList.map((country,i)=>
             <option>{country.name}</option>)}
            </select>
            <br/>
            *No.of.emp:<input type="text" name="noOfEmp" value={this.state.noOfEmp} onChange={this.updateData}/><br/>
            PhoneNo:<input type="tel" name="phNo" value={this.state.phNo} onChange={this.updateData}/><br/>
            Revenue:<input type="text" name="revenue" value={this.state.revenue} onChange={this.updateData}/><br/>
            <button onClick={this.getData}>Submit</button>
            </section>
            :
            <section></section>}
            
            </div>
            
        );
    }
}
export default Organization;