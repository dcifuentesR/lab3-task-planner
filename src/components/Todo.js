import React from 'react';
import './css/Todo.css';
import { Card, CardContent, Typography,List, ListItem, Icon } from '@material-ui/core';
import DoneIcon from '@material-ui/icons/Done';
export class Todo extends React.Component {
    constructor(props) {
        super(props);



    }

    render() {
        return (
            <Card className="cardRoot">
                <List className="cardContent">
                    <ListItem className="cardRow">
                        <Typography variant="h5">{this.props.name}</Typography>
                        <DoneIcon/>{/*se mapeará despues dependiendo de status*/}
                    </ListItem >
                    <ListItem alignItems="center">
                        <Typography variant="h5">{this.props.status} - </Typography>
                        <Typography variant="h5">{this.props.dueDate}</Typography>
                    </ListItem>
                    <ListItem alignItems="center">
                        <Typography variant="h5">{this.props.responsible.name}</Typography>
                    </ListItem>

                </List>

            </Card>
                    
            
        );
    }
}