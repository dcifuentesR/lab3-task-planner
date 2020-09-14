import React from 'react';
import {Todo} from "./Todo";
import { NewTask } from './NewTask.js';
import { List, ListItem, Card, Button } from '@material-ui/core';


export class TodoList extends React.Component {
    constructor(props){
        super(props);
        this.state={todoList:this.props.todoList,
                    open:false};
        this.handleAddTask = this.handleAddTask.bind(this);
        this.handleOpenNewTask = this.handleOpenNewTask.bind(this);
        this.handleCloseNewTask = this.handleCloseNewTask.bind(this);
    }

    handleAddTask(newItem){
        this.setState({todoList:this.state.todoList.concat(newItem)});
        this.handleCloseNewTask();
    }

    handleOpenNewTask(e){
        this.setState({open:true});
    }

    handleCloseNewTask(e){
        this.setState({open:false});
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
                <NewTask open={this.state.open} addTask={this.handleAddTask}/>
            </List>

        );
    }
}