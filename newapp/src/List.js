import React,{Component} from 'react';

class List extends Component
{
    render(){
        const arr=[1,2,3,4,5,6,7,8,9,10]
        const list=[]
        for(let x in arr)
        {
            console.log(arr[x])
            list.push(<li>{arr[x]}</li>
                );
        }
        return(
            <div>
            {list}
            </div>
        )
    }
}
export default List;