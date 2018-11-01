import React,{Component} from 'react';

class Login extends Component {
    constructor(props)
    {
        super();
        this.state={
            isLoggedIn:false
        };
        
    }
    LoginLogout=()=>
    {
        this.setState({
            isLoggedIn:!this.state.isLoggedIn
        });
    }
    render()
    {
        return(
            <div>
            {!this.state.isLoggedIn ? 
            <section>
            <h1>Please Login</h1>
            <button onClick={this.LoginLogout}>Login</button>
            </section>
            :
            <section>
            <h1>Welcome Radhika</h1>
            <button onClick={this.LoginLogout}>Logout</button>
            </section>
        }
            </div>
        );
    }
}
export default Login;