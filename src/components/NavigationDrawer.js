import React from 'react';
import { SwipeableDrawer, List, ListItem, ListItemAvatar, Avatar, ListItemText, Divider } from '@material-ui/core';

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
                    <ListItemText primary="Daniel Cifuentes" secondary="daniel.cifuentes-r@mail.escuelaing.edu.co"/>
                </ListItem>
                <Divider/>

            </List>
        </SwipeableDrawer>
        );
        
    }
}