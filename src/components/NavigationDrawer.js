import React from 'react';
import { SwipeableDrawer, List, ListItem, ListItemAvatar, Avatar, ListItemText, Divider, Button } from '@material-ui/core';

export class NavigationDrawer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isOpen:false
        }

        //this.toggleDrawer = this.toggleDrawer.bind(this);
    }

    render(){
        return(
        <SwipeableDrawer
            anchor="left"
            open={this.state.isOpen}
            onOpen={()=>{this.setState({isOpen:true})}}
            onClose={()=>{this.setState({isOpen:false})}}
        >
            <List>
                <ListItem>
                    <ListItemAvatar><Avatar/></ListItemAvatar>
                    <ListItemText primary={localStorage.getItem("loggedInUser")} secondary="daniel.cifuentes-r@mail.escuelaing.edu.co"/>
                </ListItem>
                <Divider/>
                    <Button onClick={this.props.handleLogout}>Logout </Button>

            </List>
        </SwipeableDrawer>
        );
        
    }
}