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

    render() {
        //console.log('♥: todolist.js : render comp: this.state value:',this.state)
        return (
            <div>
                <h2>get busy❣</h2>
                <ToDoForm />
                {this.state.data.length > 0 
                    ? this.state.data.map((item, index) => <ToDo key={index} taskData = {item}/>)
                    : 'l♥ading...'
                }
            </div>
        )
    }
}

export default ToDoList;