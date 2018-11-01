import React, { Component } from 'react';
/*import Clicker from './Clicker';
import './timer.jpg';
import './App.css';*/



var style2={
    color:'violet',Align:"center"
   // background:"url('+<img src={require('./timer.jpg')}/>+') noRepeat center center fixed"
    }
/*class ClickerApp extends Component {

    constructor() {
        super();

        this.state = {
            title: 'Icrement-Decrement by React'
        };
    }

    render() {
        return (
            <div style={style2}>
                <div id="header"><h1>{this.state.title}</h1> </div>
                <div class="m">
                    <Clicker />
                </div>
            </div>
        );
    }
}
export default ClickerApp;*/
class ShoppingList extends React.Component {
 
    Msg = () =>{
    
        alert(this.props.name);
    }

    render() {
      return (
        <div style={style2}>
          <h1>Shopping List for {this.props.name}</h1>
          <ul>
            <li>Instagram</li>
            <li>WhatsApp</li>
            <li>Oculus</li>
          </ul>
          <button className="btn"  onClick={this.Msg}>
                         Clickme</button>
        </div>
      );
    }
  }
  export default ShoppingList;