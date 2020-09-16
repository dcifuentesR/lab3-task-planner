import React from 'react';
import { Component } from 'react';
import { FormControl, TextField, Avatar, Typography, Button } from '@material-ui/core';
import './css/UserProfile.css';
import { Redirect } from 'react-router-dom';

export default class UserProfile extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"",
            email:"",
            password:"",
            submitBtnDisabled:true
        }
        this.handleNameChange=this.handleNameChange.bind(this);
        this.handleEmailChange=this.handleEmailChange.bind(this);
        this.handlePasswordChange=this.handlePasswordChange.bind(this);
        this.checkConfirmPassword=this.checkConfirmPassword.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleNameChange(e){
        this.setState({
            name:e.target.value
        });
    }

    handleEmailChange(e){
        this.setState({
            email:e.target.value
        });
    }

    handlePasswordChange(e){
        this.setState({password:e.target.value});
    }

    checkConfirmPassword(e){
        this.setState({submitBtnDisabled:e.target.value !== this.state.password});
    }

    handleSubmit(e){
        localStorage.removeItem(localStorage.getItem("loggedInUser"));
        localStorage.setItem(this.state.name,this.state.password);
        localStorage.setItem("loggedInUser",this.state.name);

    }



    render(){
        return(
            <React.Fragment>
                <FormControl className="mainForm">
                    <Typography variant="h2" className="mainFormHeader">Registration</Typography>
                    <Avatar className="avatar" id="profilePic"></Avatar>
                    <TextField placeholder="Full name" onChange={this.handleNameChange}/>
                    <TextField placeholder="email" onChange={this.handleEmailChange}/>
                    <TextField placeholder="password" type="password" onChange={this.handlePasswordChange}/>
                    <TextField placeholder="confirm password" type="password" onChange={this.checkConfirmPassword}/>
                    <Button disabled={this.state.submitBtnDisabled} variant="contained" color="primary" onClick={this.handleSubmit}>Save Changes</Button>

                </FormControl>
            </React.Fragment>
        );
    }
}