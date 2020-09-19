import React, {useReducer} from 'react';
import { todos } from '../data.js'
import ToDo from './ToDo'
import ToDoForm from './ToDoForm.js';
import moment from 'moment';

/* GLOBAL VARIABLES AND FUCTIONS */

const ACTIONS = {
    ADD_TASK: 'add-task',
    CLEAR_COMPLETED: 'clear-completed',
    TOGGLE_COMPLETE: 'toggle-complete',
    DELETE_TASK: 'delete-task',
    EDIT_TASK: 'edit-task'
}

function reducer(todoData, action) {
    switch(action.type) {
        case ACTIONS.ADD_TASK:
            return [...todoData, action.payload];      
        case ACTIONS.TOGGLE_COMPLETE:
            return todoData.map(task => {
                return task.id === action.payload.id ? {...task, completed: !task.completed, time:action.payload.timeStamp} : task;
            });
        case ACTIONS.DELETE_TASK:
            return todoData.filter(task => {
                return task.id !== action.payload.id;
            });
        case ACTIONS.CLEAR_COMPLETED:
            return todoData.filter(task => {
                return task.completed === false;
            }); 
        case ACTIONS.EDIT_TASK:
            return todoData.map(task => {
                return task.id === action.payload.id ? {...task, task: action.payload.task} : task;
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

    const editTask = (editedTask, taskID) => {
        console.log('param vlues',editedTask, taskID)
        dispatch({ 
            type: ACTIONS.EDIT_TASK, 
            payload: {
                task: editedTask, 
                id: taskID
            }
        })
    }

    const toggleComplete = taskID => {
        dispatch({
            type: ACTIONS.TOGGLE_COMPLETE, 
            payload: {id: taskID, timeStamp: `completed ${moment().calendar()}`}
        })
    }

    const deleteTask = taskID => {
        dispatch({
            type: ACTIONS.DELETE_TASK, 
            payload: {id: taskID}
        })
    };

    const clearCompleted = e => {
        e.preventDefault();
        dispatch({type: ACTIONS.CLEAR_COMPLETED})
    } ;

    return (
        <div>
{/* TODOFORM COMPONENT*/}
            <ToDoForm addTask = {addTask} clearCompleted = {clearCompleted} />
{/* TODO COMPONENTS */}
            {todoData.length > 0 
                ? todoData.map(item => {
                    return (
                        <ToDo key={item.id} 
                            taskData = {item} 
                            toggleComplete = {toggleComplete} 
                            deleteTask = {deleteTask}
                            editTask = {editTask} />
                    )
                })
                : 'no tasks here!'
            }
        </div>
    )
}

export default ToDoList;