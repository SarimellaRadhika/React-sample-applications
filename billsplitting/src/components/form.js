import React,{Component} from 'react';
import AddDataHoc from './hoc';
import { add_member, delete_member, edit_member, split_bill } from '../actionCreaters/actionCreaters';
import {connect} from 'react-redux';
class Form extends Component{
    constructor(props){
        super(props)
        this.state={
            add_flag:false,
            member:"",
            amount:0,
            total:0,
            desc:"",
            date:"",
            list:[],
            unequal_flag:false,
            summary_flag:false
        };
        this.handleAddMember=this.handleAddMember.bind(this);
        this.getInput=this.getInput.bind(this);
        this.handleDetete=this.handleDetete.bind(this);
        this.serachItem=this.serachItem.bind(this);
        this.handleDropdown=this.handleDropdown.bind(this);
        this.handleSplitType=this.handleSplitType.bind(this);
        this.getSummary=this.getSummary.bind(this);
    }
    componentWillReceiveProps(newprops)
    {
       // console.log("at component willl receive props",this.state.member)
        if(newprops.flag!==this.props.flag&&this.state.member!=="")
        {
            let temp=this.state.list
            temp.push(this.state.member);
            const {member,amount}=this.state
            let data={
                member:member,
                amount:amount
            }
            this.props.dispatch(add_member(data))

            this.setState({
                add_flag:false,
                unequal_flag:false,
                member:"",
                amount:0,
                list:temp
            });
        }
    }

    handleAddMember(){
        this.setState({
            add_flag:true
        })
    }
    getInput(e)
    {
        this.setState({
        [e.target.name]:e.target.value
        });
    }
    handleDetete(i)
    {
        this.props.dispatch(delete_member(i))
    }
    serachItem(item)
    {
        this.setState({
            member:item
        })
    }
    handleDropdown(e)
    {
        let temp=this.props.membersList
        let i=temp.findIndex(x=>x.member===e.target.value)
        console.log("at handle dropdown",i)
        this.props.dispatch(edit_member(i,this.state.total))
    }
    handleSplitType(e)
    {
        if(e.target.value==="Split Equally")
        {
            this.props.dispatch(split_bill(this.state.total))
        }
        else if(e.target.value==="Split Unequally")
        {
            this.setState({
                unequal_flag:true,
                add_flag:false

            })
        }
    }
    getSummary()
    {
        this.setState({
            summary_flag:true
        })
    }

    render(){ 
        const reg=new RegExp(this.state.member,'i')
        const data= this.state.list.filter((value)=> {return(value.match(reg))})
        let style1={
            color:"red"
        }
        let style2={
            height:"400",
            width:"800",
            background:"pink",
            padding:30,
            margin:10,
            display:"grid",
            gap:10,
            color:"red",
            font:"40",
            overflow:"scroll"
         
    }
        return(
         <div>
             <table>
                 <tbody>
                 <tr>
            <td> Date::<input type="date" name="date" onChange={this.getInput} required/>&nbsp;&nbsp;&nbsp;&nbsp;</td>
            <td> Desc::<input type="text" name="desc" onChange={this.getInput} required/><br/></td></tr><br/>
            <tr><td> Amount::<input type="number" name="total" onChange={this.getInput} required/>&nbsp;&nbsp;&nbsp;&nbsp;</td>
            <td> Split Type::<select onChange={this.handleSplitType} required>
                <option>---select---</option>
                 <option>Split Equally</option>
                 <option>Split Unequally</option>
                 <option>Split by percentages</option>
                 <option>Split by shares</option>
                 <option>Split by adjustments</option>
                 </select>
            </td>
            </tr><br/>
            <tr colSpan="2">Spent By::<select onChange={this.handleDropdown}>
            {this.props.membersList.map((val,i)=><option>{val.member}</option>)}
            <option>Multiple persons</option>
            </select></tr>
            </tbody>
            </table><br/>
        {this.state.add_flag
                        ?
                        !this.state.unequal_flag?
                       <table>
                        <tr><td>Participant</td>&nbsp;&nbsp;&nbsp;
                        <td><input type="text" name="member" value={this.state.member} onChange={this.getInput} autoFocus/></td><br/></tr>
                        <tr><td></td>&nbsp;&nbsp;&nbsp;<td>{data.map((val)=><h4 onClick={()=>this.serachItem(val)}>{val}</h4>)}</td>
                        {/* <td><input name="amount" value={this.state.amount} type="number" onChange={this.getInput}/></td>&nbsp;&nbsp;&nbsp; */}
                        </tr>
                       </table>:
                       <table>
                       <tr><td>Participant</td>&nbsp;&nbsp;&nbsp;<td>Amount Spent</td></tr><br/>
                       <tr><td><input type="text" name="member" value={this.state.member} onChange={this.getInput} autoFocus/></td>&nbsp;&nbsp;&nbsp;
                       <td><input name="amount" value={this.state.amount} type="number" onChange={this.getInput}/></td>
                       </tr><br/>
                       <tr><td>{data.map((val)=><h4 onClick={()=>this.serachItem(val)}>{val}</h4>)}</td>
                       &nbsp;&nbsp;&nbsp;<td></td>
                       </tr>
                      </table>
                        :
                        <button onClick={this.handleAddMember}>Add member</button>}
            
            <br/><br/>
            <table>
                {/* <tr><td>Participant</td>&nbsp;&nbsp;&nbsp;<td>delete Participant</td></tr> */}
            {this.props.membersList.map((val,i)=>
                { return <tr><td>{val.member}</td>&nbsp;&nbsp;&nbsp;
                         <td><button onClick={()=>this.handleDetete(i)}>delete</button></td>
                         </tr>})}
                </table>
                <br/>
             <button onClick={this.getSummary}>Generate Summary</button> 
             {this.state.summary_flag ?
               <div style={style2}>
               -------------Summary-------------<br/>
               Date  {this.state.date}&nbsp;&nbsp;&nbsp;
               Description  {this.state.desc}&nbsp;&nbsp;&nbsp;
               Total amount  {this.state.total}<br/>
               <table><tr style={style1}>&nbsp;&nbsp;&nbsp;<td>Participant</td>&nbsp;&nbsp;<td>Status</td></tr>
               {this.props.membersList.map((val)=>{return <tr>
                &nbsp;&nbsp;&nbsp;<td> {val.member}</td>&nbsp;&nbsp;
                  <td> {val.amount>0?"owed by    "+val.amount:"owes    "+(-1*val.amount)}</td>
               </tr>})}
               </table>
               </div>
             :null}
              
         </div>
        );
    }
}
function mapStateToProps(store){
    return{
        membersList:store.parentList
    }
}
export default AddDataHoc(connect(mapStateToProps)(Form));