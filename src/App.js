import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Login } from './components/Login.js';

import { NavigationDrawer } from './components/NavigationDrawer';

import { BrowserRouter, Link, Route, Redirect, Switch } from 'react-router-dom';
import TodoApp from './components/TodoApp.js'

const loggedInUser = localStorage.getItem("loggedInUser");

class App extends Component {

    constructor(props) {
        super(props);
        
        this.state = loggedInUser ?//sera esta la causa?
            { isLoggedIn: true } :
            { isLoggedIn: false };

        localStorage.setItem("dcifuentes", "testPassword");
        localStorage.setItem("lrodriguez", "password");

        this.handleLogin = this.handleLogin.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
    }

    handleLogin(username, password) {
        if (localStorage.getItem(username) != null && localStorage.getItem(username) == password) {
            this.setState({ isLoggedIn: true });
            localStorage.setItem("loggedInUser", username);
            return (<Redirect to="/todo"/>)
        }

    }

    handleLogout() {
        localStorage.removeItem("loggedInUser");
        this.setState({ isLoggedIn: false });
        return (
            <Redirect to="/" />
        )
    }

    render() {

        const PrivateRoute = ({ children, ...rest }) => {

            return (
                <Route

                    {...rest}
                    render={() => { return this.state.isLoggedIn ? children : <Redirect to="/" /> }}

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
                
                <BrowserRouter>
                    <div className="App">
                    <NavigationDrawer handleLogout={this.handleLogout}/>
                        <header className="App-header">
                            <img src={logo} className="App-logo" alt="logo" />
                            <h1 className="App-title">Task Planner</h1>
                        </header>

                        <Switch>
                            <Route exact path="/">
                                {LoginView}
                            </Route>
                            <PrivateRoute path="/todo" >
                                <TodoAppView />
                            </PrivateRoute>
                        </Switch>
                    </div>
                </BrowserRouter>


        );
    }



}

export default App;