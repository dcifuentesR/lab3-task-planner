import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Login }  from './components/Login.js';

import { BrowserRouter as Router, Link, Route, Redirect, Switch } from 'react-router-dom';
import TodoApp from './components/TodoApp.js'


class App extends Component {

    constructor(props) {
        super(props);
        this.state = { isLoggedIn: false };

        localStorage.setItem("dcifuentes", "testPassword");
        localStorage.setItem("lrodriguez", "password");

        this.handleLogin = this.handleLogin.bind(this);
    }

    handleLogin(username, password) {
        if (localStorage.getItem(username) == null || localStorage.getItem(username) != password) {

        } else {
            this.setState({ isLoggedIn: true });
        }

    }

    render() {

        const PrivateRoute = ({ children, ...rest }) => {
    
            return (
                <Route
                
                    {...rest}
                    render={()=>{return this.state.isLoggedIn ? children : <Redirect to="/"/>}}
    
                />
            );
        }
        const LoginView = () => (
            <Login handleLogin={this.handleLogin} />
        );

        const TodoAppView = () => (
            <TodoApp />
        );


        return (
            <Router>
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo" />
                        <h1 className="App-title">Task Planner</h1>
                    </header>

                    <Switch>
                    <Route exact path="/">
                      {LoginView}
                        </Route>
                        <PrivateRoute path="/todo" >
                            <TodoAppView/>
                        </PrivateRoute>
                    </Switch>
                </div>
            </Router>

        );
    }



}

export default App;