import React,{Component} from 'react';
import {connect} from 'react-redux';
import { getorglist } from '../actions/actionCreators';
import {Link} from 'react-router';
class OrgList extends Component{
    componentDidMount()
    {
        fetch("http://172.26.102.81:8000/organizations/serviceprovider/2016101819336/activepartners/?start_value=0&range=8&_=1533118878526")
        .then(res=>res.json())
        .then(
            (result)=>{this.props.dispatch(getorglist(result.response))}
            
        );
    }
    render()
    {
        //console.log("at orglist",this.props.orgList)
        const data =this.props.orgList;
        console.log(data);
        return(
            <div>
                <h1>hello</h1>
                <ul>
               { data.map((org,i)=>{
                    let path="/Orginfo/"+org.unique_id
                    return <li><Link to={path}>{org.name}</Link></li>
                })
            }
            </ul>
            </div>
        );
    }
}
function storeToProps(state)
{

    return{
        orgList:state.organization.orgList
    }
}
export default connect(storeToProps)(OrgList)