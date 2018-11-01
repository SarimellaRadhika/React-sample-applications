import React,{Component} from 'react';
 class Form extends Component

 { 
     constructor(props)
     {
         super()
         this.state={
             name:'',
             subject:'',
             rollno:''
         };

     }
    
     testData=(e)=>
     {
         this.setState(
             {
                [e.target.name] : e.target.value
             }
         );
        // alert(e.target.name)
         //alert(e.target.value)
     }
     showData=()=>
     {
      const {name,subject,rollno}=this.state;
      if(name.trim().length>0)
      {
         const Data={
             name:name,
              subject:subject,
              rollno:rollno
          }
        console.log(Data)
          
      }
      else{alert("fill mandatory fields")}
     }
     render()
     {
        const {name,subject,rollno}=this.state;
         return(
            <div>
            <table>
            <tbody>
            <tr>
            <td>Name:</td><td><input type="text" name="name" value={name} onChange={this.testData}/></td>
            </tr>
            <tr>            
            <td>Subject:</td><td><input type="text" name="subject" value={subject} onChange={this.testData}/></td>
            </tr>
            <tr>
            <td>Rollno:</td><td><input type="text" name="rollno" value={rollno} onChange={this.testData}/></td>
            </tr>
            <tr>
            <td><button onClick={this.showData}>Submit</button></td>
            </tr>
            </tbody>
             </table>
            </div>
         );
     }
 }
 export default Form;