import React, {Component} from 'react';
import {connect} from 'react-redux';
class Cart extends Component{
    render()
    {
        console.log("hello cart")
        let data=this.props.obj
       let obj=Object.entries(data)
       let total=0
    return(
        <div style={{float:"right",paddingRight:"40px"}}>
            <h3>Cart</h3>
            {
                obj.map((val)=>
                    {return <div>{val[1].map((val,i)=>
                        {return <div>{val.ordered_count?
                                       <h3>
                                            {val.name}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;cost : {val.ordered_count*val.cost}<br/>
                                            <i style={{display:"none"}}>{total=total+(val.ordered_count*val.cost)}</i>
                                       </h3>
                                       :null
                                     }
                        </div>})}
                    </div>})
            }
            <h3>total amount&nbsp;&nbsp;&nbsp;{total}</h3>
        </div>
    );
    }
}
function mapStateToProps(store)
{
    return{
        obj:store.parentObject
    }
}
export default connect(mapStateToProps)(Cart);