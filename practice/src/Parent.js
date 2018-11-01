import React,{Component} from 'react';
import ProductTable from './ProductTable.js';
import SearchBar from './SearchBar.js';
class Parent extends Component{
    constructor(props)
    {
        super()
        
            this.state={
            data:
                [
                {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
                {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
                {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
                {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
                {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
                {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
                ],
                searchProduct:"",
                checkBox:""
        }
    }

searchProduct=(search)=>
{
    this.setState(
    {searchProduct:search}
    );
}

checkboxStatus=(check)=>
{
    this.setState(
        {
            checkBox:check
        }
    );
}
render()
{
let {data}=this.state
const reg =new RegExp(this.state.searchProduct,'i');
data= data.filter((value)=>
{return(value.name.match(reg))})

    return(
        <div>
        <SearchBar searchProduct={this.searchProduct} checkStatus={this.checkboxStatus}/>
        
        <table>
            <tbody>
                {this.state.checkBox ?
               data.map((product, i) => 
               {if(product.stocked)
               
               return <ProductTable key = {i} data = {product} />
               })
                :
                data.map((product,i)=>{return <ProductTable key={i} data={product}/>})
                
                }
            </tbody>
        </table>
        </div>
    );

}

}
export default Parent;