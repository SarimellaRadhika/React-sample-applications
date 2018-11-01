import React, { Component } from 'react';

//import Form from './form.js'
class Reservation extends Component{

constructor(props)
{
    super()
    this.state={
        seatInfo:[],
        name:"",
        email:"" ,
        seatNo:null,
        seats:["green","green","green","green","green"],
        seatReserved:[]
      
   };
  
}

handleClick=(index)=>
{
    this.state.seats[index]="blue"
    this.setState({
        seatNo:index,
        seats:this.state.seats
    });
}

changeText=(e)=>{
    this.setState(

      { [e.target.name] : e.target.value
        }
    
    );
}

displayData=(e)=>{
    if(this.state.seatNo!=null)
    {
    const {name,email,seatNo}=this.state
    const data={
            seatNo:seatNo,
            name:name,
            email:email
           }

        console.log(data);
      let tempSeatData=this.state.seatInfo
     tempSeatData.push(data)
     let temp=this.state.seats
     temp[this.state.seatNo]="red"
        this.setState(
        {seatInfo:tempSeatData,
         seats:temp,
         name:"",
         email:"",
         seatNo:null       
         }
        );
    }
    else{alert("Please select the seat")}
    }

    deleteText=(itemToDelete,changeColor)=>
    {
       const nlist=this.state.seatInfo.filter((item,i)=>
       {
           return i!==itemToDelete
       });
       let temp=this.state.seats
       temp[changeColor]="green"
       this.setState(
          { seatInfo: nlist,
            seats:temp}
       );

    }


render()
{

    return(
        <div>
           
       
        {this.state.seats.map((seat,i)=>
            {
               
                return <button value={i} style={{backgroundColor:seat}} disabled={seat==="green"?false:true} onClick={()=>this.handleClick(i)}>seat{i}</button>
                
            }
            )
        }
       
        <br/>
        <hr/>       
        Name:<input type="text" name='name' value={this.state.name} onChange={this.changeText}></input>
        <br/>Email:<input type="text" name='email' value={this.state.email} onChange={this.changeText} ></input>
        <br/><button onClick={this.displayData}>SUBMIT</button>

          <ul>
                    {this.state.seatInfo.map((item,i)=>
                    {
                        return <p key={i}>
                        {item.seatNo}
                        &nbsp;&nbsp;
                        {item.name}&nbsp;&nbsp;
                
                        {item.email}&nbsp;&nbsp;
                        <button onClick={()=>this.deleteText(i,item.seatNo)}>delete</button>
                        </p>
                    }
                    )
                    }
                
               </ul>  

        </div>
    );
}
}
export default Reservation;