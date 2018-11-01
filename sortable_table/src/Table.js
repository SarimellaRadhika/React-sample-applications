import React,{Component} from 'react';
import './table.css';
class Table extends Component{
    constructor(props)
    {
        super(props);
        this.state={
            data:[
                {id:"N120488",name:'Radhika',YearOfPass:2012},
                {id:'N120487',name:"Prashi",YearOfPass:2013},
                {id:'N120482', name:"SaiSri",YearOfPass:2011},
                {id:"N120499",name:"Sushma",YearOfPass:2011},
                {id:"N120489",name:"Chandrika",YearOfPass:2012}
            ]
        }
    }
    sortByHeading=(content)=>{
    console.log("text within div",content)
    let temp=this.state.data
        if(content==="Id")
        {
            temp.sort((a,b)=>a.id>b.id)
        }
        else if(content==="Name")
        {
            temp.sort((a,b)=>a.name>b.name)
        }
        else
        {
            temp.sort((a,b)=>a.YearOfPass>b.YearOfPass)
        }
        this.setState({
            data:temp
        })
    }

    render(){
        return(
            <div>
                <h3><i style={{paddingLeft:'550px',paddingTop:'100px'}}>Sortable Table</i></h3>
                <table className="table">
                        <tbody>
                        <tr className="head">
                            <th onClick={()=>this.sortByHeading("Id")}>Id</th><th onClick={()=>this.sortByHeading("Name")}>Name</th><th onClick={()=>this.sortByHeading("YearOfPass")}>YearOfpass</th>
                        </tr>
                        
                        {this.state.data.map((data,i)=>{return <tr key={i} style={{backgroundColor:(i%2===0)?"aquamarine":"whitesmoke",color:"green"}}>
                            <td>{data.id}</td><td>{data.name}</td><td>{data.YearOfPass}</td></tr>})}
                        </tbody>
                </table>
            </div>
        );
    }
}
export default Table;