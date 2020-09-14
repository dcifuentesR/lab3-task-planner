import React from 'react';
import { Typography, TextField, Select, MenuItem, FormControl, Dialog, Fab, Card } from '@material-ui/core';
import {DatePicker, MuiPickersUtilsProvider} from '@material-ui/pickers';
import AddIcon from '@material-ui/icons/Add';
import DateFnsUtils from '@date-io/date-fns';

import './css/NewTask.css';

export class NewTask extends React.Component{
    constructor(props){
        super(props);
        this.state={
            description:"New task",
            responsible:{
                name:localStorage.getItem("loggedInUser"),
                email:"daniel.cifuentes-r@mail.escueaing.edu.co"
            },
            status:"ready",
            dueDate:new Date().toDateString()
        }
        //cambiar a setState
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.handleStatusChange = this.handleStatusChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleResponsibleChange = this.handleResponsibleChange.bind(this);

    }

        
    handleDescriptionChange(e){
       this.setState({description:e.target.value});
    }

    handleStatusChange(e){
        this.setState({status:e.target.value});
    }

    handleDateChange(e){
        this.setState({dueDate:e.toDateString()})
    }

    handleResponsibleChange(e){
        this.setState({responsible:{
            name:e.target.value
        }})
    }

    render(){
        return(
            <Dialog open={this.props.open}>
                <Card className="dialogCard">
                <FormControl id="newTaskForm">
                    <Typography variant="h3">New Task</Typography>
                    <TextField placeholder="Description" onChange={this.handleDescriptionChange}/>
                    <TextField placeholder="Responsible" onChange={this.handleResponsibleChange}/>
                    <Select value={this.state.status} onChange={this.handleStatusChange}>
                        <MenuItem value="ready">Ready</MenuItem>
                        <MenuItem value="in progress">In progress</MenuItem>
                        <MenuItem value="done">Done</MenuItem>
                    </Select>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <DatePicker onChange={this.handleDateChange}/>
                    </MuiPickersUtilsProvider>
                    <Fab id="addTaskBtn" size="small" color="primary" onClick={()=>{this.props.addTask(
                        {
                            description:this.state.description,
                            responsible:{
                                name:this.state.responsible.name,
                                email:"daniel.cifuentes-r@mail.escueaing.edu.co"
                            },
                            status:this.state.status,
                            dueDate:this.state.dueDate
                        }

                    )}}>
                        <AddIcon/>
                    </Fab>
                </FormControl>
                </Card>
                

            </Dialog>
            

        );
    }
}