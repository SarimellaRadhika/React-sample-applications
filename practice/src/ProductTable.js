import React,{Component} from 'react';
class ProductTable extends Component{
    render()
    {
    const mainData=this.props.data;
    const name= mainData.stocked ? mainData.name :
    <span style={{color:'red'}}>{mainData.name}</span>
    
        return(
            <div>
                <tr>
                    <td>{mainData.category}</td>
                    <td>{mainData.price}</td>
                    <td>{name}</td>
                </tr>
            </div>
        );
    }
}
export default ProductTable;