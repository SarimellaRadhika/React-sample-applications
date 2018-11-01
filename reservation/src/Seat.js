import React, { Component } from 'react';
import Form from './form.js';
import './seat.css';
class Seat extends Component{
render()
{
    return(
        <div>
                               
            <button value={this.props.seatNo} class={this.state.active?"button2":"button"}>{this.props.seatNo}</button>
                  
           

        </div>
    );
}
}
export default Seat;