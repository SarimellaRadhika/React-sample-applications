import React,{Component} from 'react';
import Change from './Change.js';
import Login from './Login.js';
import List from './List.js';
import Parent from './ParentChild.js'
import Form from './Form.js'
class ShoppingList extends Component {

 /* DisplayMsg()
    {
      alert(this.props.name);
    }*/
    /*DisplayMsg=()=>{
        alert(this.props.name);
    }*/
  constructor(props)
  {
      super(props);
      this.DisplayMsg = this.DisplayMsg.bind(this);
    
  }

  DisplayMsg()
  {
      alert(this.props.name);
  }
  render() {
    
    return (
        <div className="shopping-list">
          <h1>Shopping List for {this.props.name}</h1>
          <ul>
            <li>Cloaths</li>
            <li>Bangles</li>
            <li>Eatables</li>
          </ul>
         <button onClick={this.DisplayMsg}>ClickMe</button>
         <Change/>
         <Login/>
         <List/>
         <Parent/>
         <Form/>
        </div>
        
        
     
    );
  }
}
export default ShoppingList;
