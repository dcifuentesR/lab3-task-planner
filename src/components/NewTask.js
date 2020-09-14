import React from 'react';
import { Typography, TextField, Select, MenuItem, FormControl, Dialog, Button } from '@material-ui/core';
import {DatePicker, MuiPickersUtilsProvider} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

export class NewTask extends React.Component{
    constructor(props){
        super(props);
        this.newItem={
            description:"New task",
            responsible:{
                name:localStorage.getItem("loggedInUser"),
                email:"daniel.cifuentes-r@mail.escueaing.edu.co"
            },
            status:"ready",
            dueDate:new Date().toDateString()
        };
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handlePriorityChange = this.handlePriorityChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleResponsibleChange = this.handleResponsibleChange.bind(this);

    }

        
    handleTextChange(e){
       this.newItem.name =e.target.value;
    }

    handlePriorityChange(e){
        this.newItem.priority = e.target.value;
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
                    <TextField placeholder="Description" onChange={this.handlePriorityChange}/>
                    <TextField placeholder="Responsible" onChange={this.handleResponsibleChange}/>
                    <Select


                    >
                        <MenuItem value="Ready">Ready</MenuItem>
                        <MenuItem value="In progress">In progress</MenuItem>
                        <MenuItem value="Done">Done</MenuItem>
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