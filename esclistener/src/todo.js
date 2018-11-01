import React,{Component} from 'react';
import todoHoc from './todoHoc';

class Todo extends Component{

    constructor(props){
        super(props)
        this.state={
            txt:"",
            txtList:[]
        };
    }
getTxt=(e)=>
{
this.setState({
    txt:e.target.value
});
}
componentWillReceiveProps(newProps)
{
    console.log("in will receive props---prev props",this.props.flag)
    console.log("in will receive props---next props",newProps.flag)
    if(newProps.flag!==this.props.flag)
    {
        if(this.state.txt!=='')
        {
            let temp=this.state.txtList
            temp.push(this.state.txt)
            this.setState({
                txtList:temp
            });  
        }
    }
    
}
render()
{
    return(
        <div>
        <input name="txt" value={this.state.txt} onChange={this.getTxt}/>
       <ul> 
       {this.state.txtList.map((val)=>{return <li>{val}</li>})}
       </ul>
       </div>
        );
}
}
export default todoHoc(Todo);