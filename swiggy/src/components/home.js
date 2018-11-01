import React,{Component} from 'react';
//import background from '../a.jpg'
class Home extends Component{
render(){
    return(
        <div>
            {this.props.children}
            <h2 style={{color:"skyblue"}}>Hello Radhika...Welcome to Swiggy</h2>
            
        </div>
    );
}
}
export default Home;