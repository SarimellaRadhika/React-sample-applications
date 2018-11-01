import React,{Component} from 'react';
import propTypes from 'prop-types';
import Square from './Square';
import Chess from './Chess';

class Board extends Component{
    static propTypes={
        knightPosition:propTypes.arrayOf(
            propTypes.number.isRequired
        ).isRequired
    };
    renderSquare(i){
        console.log("at render square method")
        const x=i%8;
        const y=Math.floor(i/8);
        const black=(x+y)%2===1;
        console.log("black variable======",black)
        const [knightX,knightY]=this.props.knightPosition;
        const piece=(x===knightX && y===knightY)?<Chess/>:<div>&nbsp;</div>;
        return(
            <div key={i} style={{width:"12.5%",height:"12.5%",display:'inline-block'}}>
                <Square black={black}>
                    {piece}
                </Square>
            </div>
        );
    }
    render(){
      //  const [knightX,knightY]=this.props.knightPosition;
        const squares=[];
        for(let i=0;i<64;i++){
            squares.push(this.renderSquare(i))
        }
        return(
            // <div style={{display:'inline',width:'50%',height:'50%'}}>
            // {squares.map((val,i)=>{const x=val%8;const y=Math.floor(val/8);
            //     const piece=(x===knightX && y===knightY)?<Chess/>:<div>&nbsp;</div>;
            //      return <i key={i} style={{width:"12.5%",height:"12.5%",display:'inline-block'}}>
            //     <Square black={(x+y)%2===1?true:false}>
            //         {piece}
            //     </Square>
            // </i>  })
            // }
            // </div>
            <div style={{display:'inline',width:'50%',height:'50%'}}>
            {squares}
            </div>
        );
    }
}
export default Board;

