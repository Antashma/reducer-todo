import React, {useState, useReducer} from 'react';
import { todos } from '../data.js'
import ToDo from './ToDo'
import ToDoForm from './ToDoForm.js';

const ToDoList = () => {
    const [todoData, setTodoData] = useState([...todos])

    const addTask = newTask => {
        setTodoData([...todoData, newTask])
    }

    const clearCompleted = e => {
        e.preventDefault();
        const notComplete = todoData.filter(item => !item.completed);
        console.log('not complete', notComplete)
    }

 /*    const toggleComplete = taskID => {
        console.log(taskID);
        this.setState({...this.state.data,
            this.data.map(item => {
            if(taskID === item.id) {
                !item.completed
            }
        })})

    } */


        //console.log('♥: todolist.js : render comp: this.state value:',this.state)
    return (
        <div>
            <h2>get busy❣</h2>
            <ToDoForm addTask = {addTask} clearCompleted = {clearCompleted} />
            {todoData.length > 0 
                ? todoData.map((item, index) => <ToDo key={index} taskData = {item}/>)
                : 'l♥ading...'
            }
        </div>
    )
}

export default ToDoList;