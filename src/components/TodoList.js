import React from 'react';
import {Todo} from "./Todo";
import { NewTask } from './NewTask.js';
import { List, ListItem, Card, Button } from '@material-ui/core';
import TaskFilters from './TaskFilters';


export class TodoList extends React.Component {
    constructor(props){
        super(props);
        this.state={todoList:this.props.todoList,
                    filteredList:this.props.todoList,
                    openNewTaskDialog:false,
                    openTaskFiltersDialog:false};
        this.handleAddTask = this.handleAddTask.bind(this);
        this.handleApplyFilters = this.handleApplyFilters.bind(this);

        this.handleOpenNewTask = this.handleOpenNewTask.bind(this);
        this.handleCloseNewTask = this.handleCloseNewTask.bind(this);
        this.handleOpenApplyFilters = this.handleOpenApplyFilters.bind(this);
        this.handleCloseApplyFilters = this.handleCloseApplyFilters.bind(this);
    }

    handleAddTask(newItem){
        this.setState({todoList:this.state.todoList.concat(newItem)});
        this.handleCloseNewTask();
    }

    handleApplyFilters(filteredItems){
        this.setState({todoList:filteredItems});
        this.handleCloseApplyFilters();
    }

    handleOpenNewTask(e){
        this.setState({openNewTaskDialog:true});
    }

    handleCloseNewTask(e){
        this.setState({openNewTaskDialog:false});
    }

    handleOpenApplyFilters(e){
        this.setState({openTaskFiltersDialog:true});
    }

    handleCloseApplyFilters(e){
        this.setState({openTaskFiltersDialog:false});
    }
    render(){
        const list = this.state.todoList.map((todo,i)=>
        <Todo key={i}
            description={todo.description}
            responsible={{
                name:todo.responsible.name,
                email:todo.responsible.email
            }}
            status={todo.status}
            dueDate={todo.dueDate}/>
             
              
        );

        return(
            <List>
                {list}
                <Button onClick={this.handleOpenNewTask}>Add Task</Button>
                <Button onClick={this.handleOpenApplyFilters}>Filter</Button>
                <TaskFilters open={this.state.openTaskFiltersDialog} applyFilters={this.handleApplyFilters} tasks={this.state.todoList}/>
                <NewTask open={this.state.openNewTaskDialog} addTask={this.handleAddTask}/>
            </List>

        );
    }
}