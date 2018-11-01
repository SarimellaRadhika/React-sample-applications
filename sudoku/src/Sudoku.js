import React,{Component} from 'react';
import './sudoku.css';
class Sudoku extends Component{
    constructor(props){
        super(props)
        this.state={
            list:[
                ["",2,""],
                [3,"",""],
                [1,"",""]
            ],
            flag:false,
            list1:[
                ["",2,""],
                [3,"",""],
                [1,"",""]
            ]
        }
    }
    
    getInput=(i,j)=>{
        let id=`${i}${j}`
        console.log("id**********",id,document.getElementById(id).innerHTML)
        let val=document.getElementById(id).innerText
        let temp=this.state.list
        temp[i][j]=Number(val)
        this.setState({
            list:temp
        })
        //let b=j
        console.log("*********************",temp[i],val,temp[i].indexOf(val))
        // if(!temp[i].indexOf(val)){
        //     for(var a=0;a<=2;a++)
        //     {
        //         if(temp[a][b]===val)
        //         {
        //             // alert("please enter another value")
        //             break;
        //         }
        //     }
            
        // }
        // else{alert("please enter another number")}
        // if(a===2)
        // {
        
       
   // }
    }

    reStart=()=>{
        this.setState({
            list:this.state.list1
        })
    }

    handleRedo=()=>{
        this.setState({
            flag:false
        })
    }
    handleUndo=()=>{
        this.setState({
            flag:true
        })
    }
    render(){
        console.log("*****",this.state.list)
        return(
            <div>
                {this.state.list.map((arr,i)=>{ return <div>{arr.map((val,j)=>
                    {
                    return <div id={`${i}${j}`} className="table" contentEditable="true" onBlur={()=>this.getInput(i,j)}>{val}</div>
                    
                    })}</div>
                    
                    }
                 )}
                 <br/>
                 {this.state.flag?<button onClick={this.handleRedo} style={{backgroundColor:"maroon",color:"white",borderRadius:"5px"}}>Redo</button>:
                 <button onClick={this.handleUndo} style={{backgroundColor:"green",color:"white",borderRadius:"5px"}}>Undo</button>}
                 &emsp;&emsp;<button style={{backgroundColor:"deepSkyblue",color:"white"}} onClick={this.reStart}> Restart</button>
            </div>
        )
    }
}
export default Sudoku;