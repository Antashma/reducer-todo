import React from 'react';

class ToDoForm extends React.Component {
    state = {
        newTask: '', 
    }

    handleChanges = e => {
        this.setState({newTask: e.target.value})
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.addTask({task:this.state.newTask, completed: false, id: Date.now()})
    }

    componentDidUpdate() {
        console.log('♥: todoform.js : todoform : CDU this.state.newTask: ',this.state.newTask)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <fieldset >
                    <legend>add a task</legend>
                    <input 
                        type='text' 
                        id='new-task' 
                        name='new-task'
                        value={this.state.newTask}
                        placeholder='create a task...'
                        onChange={this.handleChanges}/>
                    <button type='submit'>Add Task</button>
                    <hr />
                    <button onClick={this.props.clearCompleted}>Clear Completed</button>
                </fieldset>
            </form>
        )
    }
}

export default ToDoForm;
