import React,{Component} from 'react';

class SearchBar extends Component{
    constructor(props)
    {
        super()
        this.state={
            search:"",
            checkBox:""
        };
    }
searchData=(e)=>
{
this.setState(
  {search:e.target.value}
);
this.props.searchProduct(e.target.value);
}

checkStatus=(e)=>
{
    this.setState(
        {
            checkBox:e.target.checked
        }
    );
    this.props.checkStatus(e.target.checked);
}

    render(){
        return(
            <div>
                <input type="text" onChange={this.searchData} placeholder="..search.."/><br/>
                <input type="checkbox" onChange={this.checkStatus}/>
            </div>
        );
    }
}
export default SearchBar;