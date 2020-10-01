import React from 'react';
import { Card, CardContent, Typography } from "@material-ui/core";

export class UserCard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Card>
                <CardContent>
                    <Typography>{this.props.userId}</Typography>
                    <Typography>{this.props.name}</Typography>
                    <Typography>{this.props.email}</Typography>
                </CardContent>

            </Card>
        );
    }
}