import React,{Component} from 'react';
class Form extends Component{
    constructor(props){
        super();
        this.state={
            name:'',
            email:'',
            avil:true,
            dataList:[]
        }
    }
  
    changeText=(e)=>{
        this.setState(
          { [e.target.name] : e.target.value}
        
        );
    }
       displayData=(e)=>{
           const {name,email}=this.state
           if(name.trim().length>0)
           {
               const data={
                   name:name,
                   email:email
                  }
               console.log(data);
             let temp=this.state.dataList
            temp.push(data)
            
               this.setState(
               {dataList:temp,
                avail:!this.state.avail}
               );
              // this.props.updateAvail(this.state.avail)
           // console.log(this.state.dataList[0])
           }
           else
           alert("pls enter name");
           
                             
       }

       deleteText=(itemToDelete)=>
       {
          const nlist=this.state.dataList.filter((item,i)=>
          {
              return i!==itemToDelete
          });
          this.setState(
             { dataList: nlist}
          );
   
       }



    render()
    {
        return(
            <div>
                <table>
                    <tbody>
                    <tr>
                        <td>
                            NAME:
                        </td>
                        <td>
                            <input type="text" name='name' value={this.state.name} 
                            onChange={this.changeText}></input>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Email:
                        </td>
                        <td>
                            <input type="text" name='email' value={this.state.email}
                             onChange={this.changeText} ></input>
                        </td>
                    </tr>
                    <tr colSpan="2"><button onClick={this.displayData}>SUBMIT</button></tr>
                    
                    </tbody>
                </table>
                    
                <ul>
                    {this.state.dataList.map((item,i)=>
                    {
                        return <p key={i}>
                        &nbsp;&nbsp;
                        {item.name}&nbsp;&nbsp;
                
                        {item.email}
                        <button onClick={()=>this.deleteText(i)}>delete</button>
                        </p>
                    }
                    )
                    }
                
               </ul>  
              
            
            
        
            </div>
        );
    }
}
export default Form;

