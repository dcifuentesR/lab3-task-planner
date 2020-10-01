import React from 'react';
import { UserList } from './UserList';


export class UsersView extends React.Component{
        constructor(props) {
            super(props);
            this.state = {
                userList: [],
            };
        }
    
        componentDidMount() {
            fetch('http://dcifuentes-task-planner-api.eastus.azurecontainer.io:8080/users')
                .then(response => response.json())
                .then(data => {
                    let userList = [];
                    data.forEach(function (user) {
                        userList.push({
                           userId:user.userId,
                           name:user.name,
                           email:user.email
                        })
    
                    });
                    this.setState({userList: userList});
                });
        }
    
        render() {
            return (
                <div>
                    <UserList userList={this.state.userList}/>
                </div>
            );
        }
}