import React from 'react';

export class AddTodo extends React.Component{
    constructor(props){
        super(props);
        this.newItem={
            responsible:{
                name:localStorage.getItem("loggedInUser"),
                email:"daniel.cifuentes-r@mail.escueaing.edu.co"
            },
            status:"ready",
        };
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handlePriorityChange = this.handlePriorityChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);

    }

        
    handleTextChange(e){
       this.newItem.name =e.target.value;
    }

    handlePriorityChange(e){
        this.newItem.priority = e.target.value;
    }

    handleDateChange(e){
        this.newItem.dueDate = e.target.valueAsDate.toDateString();
    }

    render(){
        return(
            <tr>
                <td>
                <input placeholder="TaskName" onChange={this.handleTextChange}/>
                </td>
                <td>
                <select onChange={this.handlePriorityChange}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                </td>
                
                <td>
                    <input type="date" onChange={this.handleDateChange}/>
                </td>
                <button onClick={() =>this.props.addTask({...this.newItem})}>Add</button>
            </tr>
            

        );
    }
}