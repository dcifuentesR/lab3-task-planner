import React from 'react';
import {Todo} from "./Todo";
import { AddTodo } from './AddTodo';
import { List, ListItem, Card } from '@material-ui/core';


export class TodoList extends React.Component {
    constructor(props){
        super(props);
        this.state={todoList:this.props.todoList};
        this.handleAddTask = this.handleAddTask.bind(this);
    }

    handleAddTask(newItem){
        this.setState({todoList:this.state.todoList.concat(newItem)});
    }

    render(){
        const list = this.state.todoList.map((todo,i)=>
        <Todo key={i}
            name={todo.name}
            description={todo.description}
            responsible={{
                name:todo.responsible.name,
                email:todo.responsible.email
            }}
            status={todo.status}
            priority={todo.priority}
            dueDate={todo.dueDate}/>
             
              
        );

        return(

            <List>
                {list}
                <AddTodo addTask={this.handleAddTask}/>
            </List>

        );
    }
}