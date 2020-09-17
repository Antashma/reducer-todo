import React, {useReducer} from 'react';
import { todos } from '../data.js'
import ToDo from './ToDo'
import ToDoForm from './ToDoForm.js';

/* GLOBAL VARIABLES AND FUCTIONS */
const ACTIONS = {
    ADD_TASK: 'add-task',
    CLEAR_COMPLETED: 'clear-completed',
    TOGGLE_COMPLETE: 'toggle-complete',
    DELETE_TASK: 'delete-task'
}

function reducer(todoData, action) {
    switch(action.type) {
        case ACTIONS.ADD_TASK:
            return [...todoData, action.payload];      
        case ACTIONS.TOGGLE_COMPLETE:
            return todoData.map(task => {
                return task.id === action.payload.id ? {...task, completed: !task.completed} : task;
            });
        case ACTIONS.DELETE_TASK:
            return todoData.filter(task => {
                return task.id !== action.payload.id;
            });   
        default:
            return todoData;
        }
}


/* TODOLIST COMPONENT */
const ToDoList = () => {
    const [todoData, dispatch] = useReducer(reducer, [...todos])
    //dispatch will update state

    const addTask = newTask => {
        dispatch({ 
            type: ACTIONS.ADD_TASK, 
            payload: {
                task: newTask, 
                completed: false, 
                id: Date.now()
            }
        })
    }

    const toggleComplete = taskID => {
        dispatch({
            type: ACTIONS.TOGGLE_COMPLETE, 
            payload: {id: taskID}
        })
    }

    const deleteTask = taskID => {
        dispatch({
            type: ACTIONS.DELETE_TASK, 
            payload: {id: taskID}
        })
    }
/*     const clearCompleted = e => {
        e.preventDefault();
        const notComplete = todoData.filter(item => !item.completed);
        console.log('not complete', notComplete)
    } */




        //console.log('♥: todolist.js : render comp: this.state value:',this.state)
    return (
        <div>
            <h2>get busy❣</h2>
{/* TODOFORM COMPONENT*/}
            <ToDoForm addTask = {addTask} />
{/* TODO COMPONENTS */}
            {todoData.length > 0 
                ? todoData.map(item => {
                    return (
                        <ToDo key={item.id} 
                            taskData = {item} 
                            toggleComplete = {toggleComplete} 
                            deleteTask = {deleteTask} />
                    )
                })
                : 'no tasks here!'
            }
        </div>
    )
}

export default ToDoList;