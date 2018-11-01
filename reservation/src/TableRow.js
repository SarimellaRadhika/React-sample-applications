import React, { Component } from 'react';
class TableRow extends Component{
    constructor(props)
    {
        super()
        this.state={
            checkStatus:false
        };
    }
    
    changeCheckStatus=(index)=>
    {
        this.setState({
            checkStatus:!this.state.checkStatus
             });
             console.log("in table row",this.state.checkStatus)
             if(!this.state.checkStatus)
             {
                 this.props.pushToList(index)
             }
    }
    
    render()
    {
        return(
            <tr>
            <td><input type="checkbox" name="check" onChange={()=>this.changeCheckStatus(thi.props.index)}/></td>
            <td>{this.props.data.Name}</td>
            <td>{this.props.data.add}</td>
            <td>{this.props.data.timeZone}</td>
            <td>{this.props.data.countrycode}</td>
            <td>{this.props.data.revenue}</td>
            <td>{this.props.data.phone}</td>
            <td>{this.props.data.noemp}</td>
            <td><button onClick={()=>this.props.editData(this.props.index)}>edit</button></td>
         </tr>
        );
        
       
    }
}
export default TableRow;