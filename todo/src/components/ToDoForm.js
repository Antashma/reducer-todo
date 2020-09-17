import React, {useState} from 'react';

const ToDoForm = (props) => {
    const [newTask, setNewTask] = useState('')

    const handleChanges = e => {
        setNewTask(e.target.value)
    }

    const handleSubmit = event => {
        event.preventDefault();
        props.addTask(newTask)
        setNewTask('')
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
                <button type='submit' disabled={newTask.length < 1 ? true : false}>Add Task</button>
                <hr />
                <button onClick={e => props.clearCompleted(e)}>Clear Completed</button>
            </fieldset>
        </form>
        )
}

export default ToDoForm;
