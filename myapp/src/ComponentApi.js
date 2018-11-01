import React from 'react';
import ReactDOM from 'react-dom';

//set state handler 
/*class App extends React.Component {
   constructor() {
      super();
		
      this.state = {
         data:"Hello NetEnrich "
      }
	
      this.setStateHandler = this.setStateHandler.bind(this);
   };
   setStateHandler() {
      var item = "Hello Radhika..."
      var myArray = this.state.data;
	  myArray=myArray+item;
      this.setState({data: myArray})
   };
   render() {
      return (
         <div>
            <button onClick = {this.setStateHandler}>SET STATE</button>
            <h4>State Array: {this.state.data}</h4>
         </div>
      );
   }
}

// force update
/*class App extends React.Component {
   constructor() {
      super();
      this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
   };
   forceUpdateHandler() {
      this.forceUpdate();
   };
   render() {
      return (
         <div>
            <button onClick = {this.forceUpdateHandler}>FORCE UPDATE</button>
            <h4>Random number: {Math.random()}</h4>
         </div>
      );
   }
}
export default App;*/

// Find DOM node


class App extends React.Component {
   constructor() {
      super();
      this.findDomNodeHandler = this.findDomNodeHandler.bind(this);
   };
   findDomNodeHandler() {
      var myDiv = document.getElementById('myDiv');
      ReactDOM.findDOMNode(myDiv).style.color = 'green';
   }
   render() {
      return (
         <div>
            <button onClick = {this.findDomNodeHandler}>FIND DOME NODE</button>
            <div id = "myDiv">
            <h1>hello how are you.This is DOM node example</h1>
            <h1>hello Node</h1>
            <h1>hi</h1></div>
         </div>
      );
   }
}
export default App;