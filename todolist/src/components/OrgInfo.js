import React, {Component} from 'react';
class OrgInfo extends Component{
    constructor(props)
    {
        super();
        this.state={
            orgDetails:{}
        };
    }
    componentDidMount()
    {
        let id=this.props.params.orgid
        fetch("http://172.26.102.81:8000/organizations/"+id+'/')
        .then(res=>res.json())
        .then((result)=>{this.setState({orgDetails:result})})
    }
    render(){
        const data=this.state.orgDetails
        console.log("at render",this.props.params.orgid)
        return(
            <div>
                Name:{data.name}<br/>
                Address:{data.address}<br/>
                Zip:{data.zip}<br/>
                Phone:{data.phone}
            </div>
        );
    }
}
export default OrgInfo;