import React, {Component} from 'react';

class Login extends Component {
    constructor(){
        super();
        this.state = {
            username: "",
            password: ""
        }
    }

    handleUnChange(value){
        this.setState({username: value})
    }

    handlePwChange(value){
        this.setState({password: value})
    }

    handleLogin(){
        alert(`username: ${this.state.username} \n password: ${this.state.password}`)
    }

    render(){
        return(
        <div>
            <input placeholder='username' onChange={e=>this.handleUnChange(e.target.value)} />
            <input placeholder='password' onChange={e=>this.handlePwChange(e.target.value)} />
            <button onClick={this.handleLogin()}>Login</button>
        </div>
        )
    }
}

export default Login;