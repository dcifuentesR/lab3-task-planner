import React from 'react';
import { Typography, TextField, Select, MenuItem, FormControl, Dialog, Button } from '@material-ui/core';
import {DatePicker, MuiPickersUtilsProvider} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

export class NewTask extends React.Component{
    constructor(props){
        super(props);
        //cambiar a setState
        this.newItem={
            description:"New task",
            responsible:{
                name:localStorage.getItem("loggedInUser"),
                email:"daniel.cifuentes-r@mail.escueaing.edu.co"
            },
            status:"ready",
            dueDate:new Date().toDateString()
        };
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.handleStatusChange = this.handleStatusChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleResponsibleChange = this.handleResponsibleChange.bind(this);

    }

        
    handleDescriptionChange(e){
       this.newItem.description =e.target.value;
    }

    handleStatusChange(e){
        this.newItem.status = e.target.value;
    }

    handleDateChange(e){
        this.newItem.dueDate = e.toDateString();
    }

    handleResponsibleChange(e){
        this.newItem.responsible.name=e.target.value;
    }

    render(){
        return(
            <Dialog open={this.props.open}>
                <FormControl>
                    <Typography variant="h3">New Task</Typography>
                    <TextField placeholder="Description" onChange={this.handleDescriptionChange}/>
                    <TextField placeholder="Responsible" onChange={this.handleResponsibleChange}/>
                    <Select onChange={this.handleStatusChange}>
                        <MenuItem value="ready">Ready</MenuItem>
                        <MenuItem value="in progress">In progress</MenuItem>
                        <MenuItem value="done">Done</MenuItem>
                    </Select>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <DatePicker value={this.newItem.dueDate} onChange={this.handleDateChange}/>
                    </MuiPickersUtilsProvider>
                    <Button onClick={()=>{this.props.addTask({...this.newItem})}}>Add task</Button>
                </FormControl>


            </Dialog>
            

        );
    }
}