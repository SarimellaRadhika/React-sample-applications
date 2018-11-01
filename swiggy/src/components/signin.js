import React, {Component} from 'react';
//import jellyfish from '../Jellyfish.jpg';
class SignIn extends Component{

render(){
    return(
        <div style={{border:1, float:"right", borderRadius:"10", paddingTop:"50", height:200,paddingRight:"50",backgroundColor:"lightblue"}}>
            
            <table>
                <tbody>
                    <tr>
                        <td> &nbsp;&nbsp;&nbsp;&nbsp;UserName:::</td>
                        <td><input type="text"/></td>
                    </tr><br/>
                    <tr>
                        <td> &nbsp;&nbsp;&nbsp;&nbsp;Email:::</td>
                        <td><input type="text"/></td>
                    </tr><br/>
                    <tr>
                        <td> &nbsp;&nbsp;&nbsp;&nbsp;Password:::</td>
                        <td><input type="password"/></td>
                    </tr><br/>
                    <tr>
                        <td colSpan="2"><button>Sign In</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
}
export default SignIn;