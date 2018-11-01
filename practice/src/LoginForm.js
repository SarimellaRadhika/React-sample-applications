import React,{Component} from 'react';

class LoginForm extends Component {
    constructor(props)
    {
        super()
        this.state={
            data:[
            name='',
            section='',
            rollno=''
            ]
        };
        
    }

    getDetails=(e)=>
    {
        
    }

    render()
    {
        return(
            <table>
                <tbody>
                    <tr>
                        <td>Name:</td>
                        <td><input type="text" onChange={this.getDetails}/></td>
                    </tr>
                    <tr>
                        <td>Section:</td>
                        <td><input type="text" onChange={this.getDetails}/></td>
                    </tr>
                    <tr>
                        <td>Rollno:</td>
                        <td><input type="text" onChange={this.getDetails}/></td>
                    </tr>
                </tbody>
            </table>
        );
    }
}