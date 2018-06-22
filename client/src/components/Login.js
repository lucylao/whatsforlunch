import React, { Component } from 'react';
import { Link, Switch, Route, Redirect } from 'react-router-dom';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: [],
            password: [],
        }
    }

    // handleFormInput {}
    render() {
        return (
            <div>
                <h1>Login</h1>
                {" "}
                <form>
                    <input id="username" onInput={this.handleFormInput} type="text" placeholder="username" value={username} />
                    <input id="password" onInput={this.handleFormInput} type="password" placehold="password" value={password} />
                </form>
            </div>
        )
    }
}

export default Login;