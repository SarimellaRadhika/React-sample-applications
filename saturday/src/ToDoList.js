import React, { Component } from 'react';
class ToDoList extends Component{
    constructor(props)
    {
        super()
        this.state={
            list:[],
            msg:""
        };
    }

    textData=(e)=>
    {
        this.setState(
            {msg:e.target.value}
        );
    }


    pushToList=(e)=>
    {
        this.state.list.unshift(this.state.msg)
        this.setState(
            {list:this.state.list}

        );
        
    }
    deleteText=(itemToDelete)=>
    {
       const nlist=this.state.list.filter((item,i)=>
       {
           return i!==itemToDelete
       });
       this.setState(
          { list: nlist}
       );

    }
   
    render()
    {
        //const namesList=this.state.list.map(function(list){
           // return <li>{list}<button onClick={this.deleteText}>Delete</button> </li>;
        //})
        
        return(
            <div>
                <input type="text" onChange={this.textData}/>
                <button onClick={this.pushToList}>Submit</button>
                
                <ul>
                    {this.state.list.map((item,i)=>
                    {
                        return <li key={i}>
                        {item}
                        <button onClick={()=>this.deleteText(i)}>delete</button>
                        </li>
                    }
                    )
                    }
                
               </ul>                
                
            </div>

        );
    }
}
export default ToDoList