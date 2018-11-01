import React,{Component} from 'react';
import ProductTable from './ProductTable'
import SearchBar from './SearchBar'
class FilterableProductTable extends Component{
constructor()
{
    super()
    
        this.state={
            data:
                
                   [ {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
                    {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
                    {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
                    {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
                    {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
                    {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
        ],
        changeInstock:false,
        search:""
        };
    
}

checkStatus=(variable)=>
{
this.setState(
    {changeInstock : variable}
);
    
}
searchStock=(variable)=>
{
this.setState(
    {search : variable }
);
    
}



render()
{
    let {data}=this.state
    const reg=new RegExp(this.state.search,'i');
    data= data.filter((value)=>
    {return(value.name.match(reg))})
    return(
    
       <div> <SearchBar changeStatus={this.checkStatus} searchStock={this.searchStock}/>

        <table>
            <tbody>
            { this.state.changeInstock?   
            data.map((product, i) => 
            {if(product.stocked)
            
            return <ProductTable key = {i} data = {product} />
            })
            :
            data.map((product,i) =>
           { return <ProductTable key={i} data={product}/>})
            }
            </tbody>
        </table>
        
        
    
        </div>
        
        
    );
}

}
export default FilterableProductTable;