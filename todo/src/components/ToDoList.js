import React from 'react';
import { todos } from '../data.js'
import ToDo from './ToDo'
import ToDoForm from './ToDoForm.js';

class ToDoList extends React.Component {
    state = {
        data: [],
    }

    componentDidMount() {
        this.setState({data: [...todos]})
    }

    addTask = newTask => {
        this.setState({data: [ ...this.state.data, newTask]})
    }

    clearCompleted = e => {
        e.preventDefault();
        const notComplete = this.state.data.filter(item => !item.completed);
        console.log('not complete', notComplete)
    }

 /*    toggleComplete = taskID => {
        console.log(taskID);
        this.setState({...this.state.data,
            this.data.map(item => {
            if(taskID === item.id) {
                !item.completed
            }
        })})

    } */

    componentDidUpdate() {
        console.log('♥: todolist.js : todolist : CDU/this.state.data: ', this.state.data)
    }

    render() {
        //console.log('♥: todolist.js : render comp: this.state value:',this.state)
        return (
            <div>
                <h2>get busy❣</h2>
                <ToDoForm addTask = {this.addTask} clearCompleted = {this.clearCompleted} />
                {this.state.data.length > 0 
                    ? this.state.data.map((item, index) => <ToDo toggleComplete={this.toggleComplete} key={index} taskData = {item}/>)
                    : 'l♥ading...'
                }
            </div>
        )
    }
}

export default ToDoList;