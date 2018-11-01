import React, { Component } from 'react';


class Child2 extends Component {
    
  render() {
    const {name,subject,rollno} = this.props.final;
    return (
         
         <div>
            <h3>Name:{name}</h3>
            <h3>Subject:{subject}</h3>
            <h3>Rollno:{rollno}</h3>

                
      </div>
    );
  }
}

export default Child2;
