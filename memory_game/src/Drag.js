import React,{Component} from 'react';
import './drag.css';
class Drag extends Component{
    constructor(props){
        super(props)
        this.state={
            imgList:["part_1","part_5","part_8","part_2","part_7","part_3","part_4","part_9","part_6"],
            // dropList:["empty","empty","empty","empty","empty","empty","empty","empty","empty"],
            dragImg:"",
            dragId:"",
            flag:false
        }
    }
    handleDrag=(i,pic)=>{
        console.log("at onDrag event",i,pic)
        this.setState({
            dragImg:pic,
            dragId:i
        })
        
    }
    onDragOver=()=>{

    }
    handleOndrop=(i,pic)=>{
        let original=["part_1","part_2","part_3","part_4","part_5","part_6","part_7","part_8","part_9"]
        //const R=require('ramda')
        console.log("at onDrop event",i,pic)
        let temp=this.state.imgList
        if(this.state.dragImg!==""&&this.state.dragId!==undefined){
        temp[i]=this.state.dragImg
        temp[this.state.dragId]=pic}
        console.log(">>>>>>>>temp",temp)
        console.log(">>>>>>>>original",original)
        let flag=temp.every((element,index)=>element===original[index])
        this.setState({
            imgList:temp,
            dragId:"",
            dragImg:"" 
        })
        if(flag)
        {
           this.setState({flag:true})
           document.getElementById('one').style.filter='blur(3px)';
           document.getElementById('two').style.filter='blur(3px)';
        }
      
        
       
    }
    render(){
        return(
            <div className="top">
                <h2 className="heading"><i>Welcome to Image Puzzle</i></h2>
           <div className="main" id="new">
                <div className="wrapper" id="one">
                {this.state.imgList.map((pic,i)=>{return <div key={i}
                draggable
                onMouseUp={()=>this.handleOndrop(i,pic)}
                onDragStart={()=>this.handleDrag(i,pic)}>
                <img src={require("./images/"+pic+".jpg")} alt="no_img" style={{width:"100px",height:"100px"}}/>
                 </div>})}
                </div>

                <div className="original" id="two">
                <img src={require("./images/house.jpg")} alt="house" style={{height:"310px",width:"310px"}}/>
                </div>  
                {this.state.flag?
                <div className="msg"><h3 style={{alignContent:'center',filter:'focus(2px)'}}><h3>Congratulations....You have won the game</h3></h3>
                  </div>  :
                null}
                
                </div>
             
                
                    </div>

        );
    }
}
export default Drag;