import React,{Component} from 'react';
class Organization extends Component{
  /*  constructor(props)
    {
        super()
        this.state={
            data:[{orgName:"Netenrich",Location: "Bhimavaram", Id:123},{orgName:"Vistara",Location:"Hyd",Id:345},{orgName:"opsRamp",Location:"Bhimavaram",Id:456}]
        };
    }*/
    render()
    {
        return(
            <div>
           {this.props.children}
            </div>
        );
    }
}
export default Organization;