import React,{Component} from 'react';
class SearchBar extends Component{
constructor(props)
{
    super(props);
    this.state={
        check:false,
        text:""
    }
        
    
}
changeValue=(e)=>
{
    this.setState(
        {
            check:e.target.checked
        
        }
    );
    console.log(this.state.check)
    this.props.changeStatus(e.target.checked);
}
changeText=(e)=>
{
    this.setState(
        {
            text:e.target.value
        
        }
    );
    
    this.props.searchStock(e.target.value);
}

render()
{
    return(
        <div>
        <input type="text" name="txt" onChange={this.changeText}/>
        <input type="checkbox" onChange={this.changeValue}/>
        </div>

    );
}

}
export default SearchBar;