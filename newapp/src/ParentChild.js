import React,{Component} from 'react';

class Parent extends Component
{
    showParent=()=>
    {
        alert("Parent")
    }
render()
{
    return(
        <div>
            <h1>This is Parent Component</h1>
            <button onClick={this.showParent}>Parent</button>
            <Child showParent={this.showParent}/>
        </div>

    );
}
}

class Child extends Component
{
    showChild=()=>
    {
        alert("Child")
        this.props.showParent();
    }
render()
{
    return(
        <div>
            <h1> This is Child component</h1>
            <button onClick={this.showChild}>Child</button>
        </div>

    );
}
}

export default Parent;