import { Card } from '@material-ui/core';
import React from 'react';
import {UserCard} from './UserCard.js';

export class UserList extends React.Component{
    constructor(props) {
        super(props);
    }

    render(){

        const list = this.props.userList.map((user,i)=>
        <UserCard
            key={i}
            userId={user.userId}
            name={user.name}
            email={user.email}
        />
        );
        return(
            <React.Fragment>
                {list}
            </React.Fragment>

        );
    }

}