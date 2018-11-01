import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Clicker.css';
let timer="./timer.jpg";
var style={align: "center"}
var style1={backgroundimage:timer}
class Clicker extends Component {

    constructor(props) {
        super();

        this.state = {
            count: props.count
        };

        this.incrementCount = this.incrementCount.bind(this);
        this.decrementCount = this.decrementCount.bind(this);
        this.resetCount = this.resetCount.bind(this);
    }

    incrementCount() {
        this.setState((prevState) => ({ count: prevState.count + 1 }));
    }

    decrementCount() {
        this.setState((prevState) => ({ count: prevState.count - 1 }));
    }

    resetCount() {
        this.setState(() => ({ count: 0 }));
    }

    render() {
        return (    <div style={style}>                 
                    <div style={style1}> {this.state.count} </div> 
                    <div id="btn">
                        <button className="btn" placeholder="Increment" onClick={this.incrementCount}>
                         Increment</button>
                        <button className="btn" placeholder="Reset" onClick={this.resetCount}>
                         Reset</button>
                        <button className="btn btn-info bottom-margin" placeholder="Decrement" onClick={this.decrementCount}>
                         Decrement</button>
                    </div>
                    </div>
              
                );
    }

}
Clicker.defaultProps = {
   count: 0
};

Clicker.propTypes = {
    count: PropTypes.number
};


export default Clicker;