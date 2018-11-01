import React,{Component} from 'react';
import './flip.css';
class FlipImage extends Component{
    constructor(props){
        super(props)
        this.state={
            list:["Chrysanthemum","Tulips","Tulips","Chrysanthemum","Lighthouse","Penguins","Lighthouse","Koala","Penguins","Desert","Koala","Desert"]
        }
    }
render(){
    return(
        <div>
                    {/* {this.state.list.map((val)=>{return <div className="flip-box">
                <div className="flip-box-inner">
                <div className="flip-box-back">
                    <img src={require("./images/"+val+".jpg")} alt="flip_picture" style={{height:"200px",width:"300px"}}/>})
                    </div>
                <div className="flip-box-front">
                    <h2>open it</h2>
                </div>
            </div>
        </div>})} */}
                    { this.state.list.map((val)=>{return <div class="f1_container">
    <div class="f1_card">
        <div class="face">
            <img src={require("./images/"+val+".jpg")} alt="flipping" style={{height: "200px", width: "250px"}} />
        </div>
        <div class="back">Some text inside here</div>
    </div>
</div>
                    })}
               
        </div>
    )

}
}
export default FlipImage;