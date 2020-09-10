import React from 'react';
import logo from '../logo.svg';
import { TodoList } from "./TodoList.js";
import '../App.css';

function TodoApp() {
  const todos = [{name:"Learn React",
                  description: "some description",
                  responsible: {
                    name: "Daniel Cifuentes",
                    email: "daniel.cifuentes-r@mail.escuelaing.edu.co"
                  },
                  status: "completed",
                  priority:5,
                  dueDate: new Date().toDateString() },
                  {name:"Learn about APIs",
                  description: "some description",
                  responsible: {
                    name: "Daniel Cifuentes",
                    email: "daniel.cifuentes-r@mail.escuelaing.edu.co"
                  },
                  status: "ready",
                  priority:4,
                  dueDate: new Date(2020,1,23).toDateString() },
                  {name:"write TODO App",
                  description: "some description",
                  responsible: {
                    name: "Daniel Cifuentes",
                    email: "daniel.cifuentes-r@mail.escuelaing.edu.co"
                  },
                  status: "in progress",
                  priority:3,
                  dueDate: new Date(2020,1,30).toDateString() }];

  return (
  <TodoList todoList={todos}></TodoList>
  );
}

export default TodoApp;