import React,{Component} from 'react';
class RamdaEx extends Component{
    render(){
        const R=require('ramda')
        console.log(R.add(2,3))
        console.log(R.keys({a:1,b:2,c:3}))
        console.log(R.adjust(R.add(3),1,[1,2,3]))
        //let e=equals(3)
        console.log(R.all(R.equals(3),[3,3,3]))
        let a=R.equals(1)
        let b=R.equals(2)
        let x=R.allPass([a,b])
        console.log(x(1,2))
        return(
            <div>
                hello
            </div>
        );
    }
}
export default RamdaEx;