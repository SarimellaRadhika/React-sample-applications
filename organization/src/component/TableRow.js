import React, { Component } from 'react';
class TableRow extends Component{
    constructor(props)
    {
        super()
        this.state={
            check:false
        };
        this.editData=this.editData.bind(this)
        this.checkStatus=this.checkStatus.bind(this)
    }


    editData(index)
    {
        this.props.editData(index)
    }

    checkStatus(index,orgName)
    {
        console.log(orgName)
        this.setState({
            check:!this.state.check});
        this.props.pushToList(index)     
    }

    render()
    {
        console.log("in tablerow render",this.state.check)
        return(
            <tr>
            <td><input type="checkbox" name="check" onChange={()=>this.checkStatus(this.props.index,this.props.data.orgName)}/></td>
            <td>{this.props.data.orgName}</td>&nbsp;&nbsp;&nbsp;
            <td>{this.props.data.address}</td>&nbsp;&nbsp;&nbsp;
            <td>{this.props.data.time}</td>&nbsp;&nbsp;&nbsp;
            <td>{this.props.data.country}</td>&nbsp;&nbsp;&nbsp;
            <td>{this.props.data.revenue}</td>&nbsp;&nbsp;&nbsp;
            <td>{this.props.data.phNo}</td>&nbsp;&nbsp;&nbsp;
            <td>{this.props.data.noOfEmp}</td>&nbsp;&nbsp;&nbsp;
            
            
            <td><button onClick={()=>this.editData(this.props.index)}>edit</button></td>
            
         </tr>
        ); 
        
       
    }
}
export default TableRow;