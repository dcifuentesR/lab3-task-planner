import React from 'react';
import { Component } from 'react';
import { FormControl, TextField, Avatar, Typography } from '@material-ui/core';
import './css/UserProfile.css';

export default class UserProfile extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <React.Fragment>
                <FormControl className="mainForm">
                    <Typography variant="h2" className="mainFormHeader">Registration</Typography>
                    <Avatar id="profilePic"></Avatar>
                    <TextField placeholder="Full name"/>
                    <TextField placeholder="email"/>
                    <TextField placeholder="password" type="password"/>
                    <TextField placeholder="confirm password" type="password"/>

                </FormControl>
            </React.Fragment>
        );
    }
}