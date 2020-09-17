import React, {useState} from 'react';

const ToDoForm = (props) => {
    const [newTask, setNewTask] = useState('')

    const handleChanges = e => {
        setNewTask(e.target.value)
        console.log(newTask)
    }

    const handleSubmit = event => {
        event.preventDefault();
        props.addTask({task: newTask, completed: false, id: Date.now()})
    }

    return (
        <form onSubmit={handleSubmit}>
            <fieldset >
                <legend>add a task</legend>
                <input 
                    type='text' 
                    id='new-task' 
                    name='new-task'
                    value={newTask}
                    placeholder='create a task...'
                    onChange={handleChanges}/>
                <button type='submit'>Add Task</button>
                <hr />
                <button onClick={props.clearCompleted}>Clear Completed</button>
            </fieldset>
        </form>
        )
}

export default ToDoForm;
