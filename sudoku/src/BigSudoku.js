import React,{Component} from 'react';
import './sudoku.css';
class BigSudoku extends Component{
    constructor(props){
        super(props)
        this.state={
            list:[
                [null,8,6,null,null,null,null,null,null],
                [7,null,null,5,3,null,6,null,null],
                [null,null,null,null,6,null,3,null,null],
                [null,null,3,null,4,null,7,5,8],
                [null,9,null,null,5,null,1,null,null],                                       
                [null,null,5,2,null,null,null,3,4],
                [null,null,null,8,null,null,null,1,null],
                [null,3,null,1,9,null,null,null,2],
                [null,null,1,3,null,4,null,null,9]
            ],
            flag:false,
            list1:[
                [null,8,6,null,null,null,null,null,null],
                [7,null,null,5,3,null,6,null,null],
                [null,null,null,null,6,null,3,null,null],
                [null,null,3,null,4,null,7,5,8],
                [null,9,null,null,5,null,1,null,null],
                [null,null,5,2,null,null,null,3,4],
                [null,null,null,8,null,null,null,1,null],
                [null,3,null,1,9,null,null,null,2],
                [null,null,1,3,null,4,null,null,9]
            ]
        }
    }

    getInput=(i,j)=>{
        let id=`${i}${j}`
        let value=Number(document.getElementById(id).innerText)
        if(value!==0){
            console.log("id**********",id,document.getElementById(id).innerHTML)
            let temp=this.state.list
            temp[i][j]=value
            this.setState({
                list:temp
            })
            if(temp[i].indexOf(value)>=0)
            {
               document.getElementById(id).style.color="red"
               
            }
            else{
                console.log("at else::::::::::::::")
                for(let a=0;a<=8;a++)
                {
                    let b=j
                    if(temp[a][b]===value)
                    {
                        document.getElementById(id).style.color="red"
                    }
                }
                console.log("checking i and j",i,j)
                if(i<=2&&j<=2)
                {
                            for(let a=0;a<=2;a++)
                            {
                                for(let b=0;b<=2;b++)
                                {
                                    if(a===i&&b===j)
                                    continue
                                    else
                                    {
                                        document.getElementById(id).style.color="red"
                                    }
                                }
                            }
                        
                    }
            
            }
           
        }   
        else{
        console.log("")
        } 
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
        return(
            <div>
                {this.state.list.map((arr,i)=>{ return <div>{arr.map((val,j)=>
                    {
                    return <div id={`${i}${j}`} key={`${i}${j}`} className="table" contentEditable="true" onBlur={()=>this.getInput(i,j)}>{val}</div>
                    
                    })}</div>
                    
                    }
                 )}
                    <br/>
                    {this.state.flag?<button onClick={this.handleRedo} style={{backgroundColor:"maroon",color:"white",borderRadius:"5px"}}>Redo</button>:
                    <button onClick={this.handleUndo}style={{backgroundColor:"green",color:"white",borderRadius:"5px"}}>Undo</button>
                }&emsp;&emsp;<button style={{backgroundColor:"deepSkyblue",color:"white"}} onClick={this.reStart}> Restart</button>
            </div>
        )
          
    }
}
export default BigSudoku;