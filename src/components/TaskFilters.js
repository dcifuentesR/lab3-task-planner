import { Typography, Select, MenuItem, FormControl, Dialog, Fab, Card, Button } from '@material-ui/core';
import {DatePicker, MuiPickersUtilsProvider} from '@material-ui/pickers';

import DateFnsUtils from '@date-io/date-fns';
import React, { Component } from 'react';

import './css/TaskFilters.css'

export default class TaskFilters extends Component {
    constructor(props) {
        super(props);
        this.state={
            responsible:"All",
            status:"All",
            dueDate:new Date().toDateString()
        }

        this.handleStatusChange = this.handleStatusChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleResponsibleChange = this.handleResponsibleChange.bind(this);
        this.handleClearAll = this.handleClearAll.bind(this);

        this.hasFilters = this.hasFilters.bind(this);
    }

    handleStatusChange(e){
        this.setState({status:e.target.value});
    }

    handleDateChange(e){
        this.setState({dueDate:e.toDateString()});
    }

    handleResponsibleChange(e){
        this.setState({
            responsible:e.target.value
        });
    }

    handleClearAll(e){
        this.setState({
            responsible:"All",
            status:"All",
            dueDate:new Date().toDateString()
        });
    }

    hasFilters(){
        return !(this.state.responsible === "All" && this.state.status==="All" && this.state.dueDate===new Date().toDateString());//toca probar con fechas
    }

    render() {
        const uniqueUsers = [...new Set(this.props.tasks.map((task,i)=>task.responsible.name))];
        const usersWithTasks = uniqueUsers.map((user,i)=>
        <MenuItem key={i} value={user}>{user}</MenuItem>);

        return (
            <Dialog open={this.props.open}>{/*siguiendo recomendación en la documentación de modal, se usa un Dialog*/}
                <Card className="dialogCard">
                    <FormControl id="mainForm">
                        <Typography variant="h3">Task Filters</Typography>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <DatePicker placeholder="Due Date" onChange={this.handleDateChange} />
                        </MuiPickersUtilsProvider>
                        <Select value={this.state.responsible} onChange={this.handleResponsibleChange}>
                            <MenuItem value={localStorage.getItem("loggedInUser")}>{localStorage.getItem("loggedInUser")}</MenuItem>
                            {usersWithTasks}
                        </Select>
                        <Select value={this.state.status} onChange={this.handleStatusChange}>
                        <MenuItem value="All">All</MenuItem>
                            <MenuItem value="ready">Ready</MenuItem>
                            <MenuItem value="in progress">In progress</MenuItem>
                            <MenuItem value="done">Done</MenuItem>
                        </Select>
                        <Button variant="contained" color="primary" onClick={()=>{this.props.applyFilters(this.props.tasks.filter((task)=>{
                            return(task.responsible.name === this.state.responsible || 
                                    task.dueDate === this.state.dueDate ||
                                    task.status === this.state.status);
                                    }),this.hasFilters()
                        )}}>Apply</Button>
                        <Button variant="contained" color="primary" onClick={this.handleClearAll}>Clear All</Button>
                    </FormControl>
                </Card>
            </Dialog>
        );
    }
}