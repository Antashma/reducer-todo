import React from 'react';

class ToDoForm extends React.Component {
    state = {
        formState: {task:'', completed: false} 
    }

    handleChanges = e => {
        this.setState({...this.state.formState, formState:[e.target.name] = e.target.value})
    }

    componentDidUpdate() {
        console.log(this.state.formState)
    }

    render() {
        return (
            <form>
                <fieldset>
                    <legend>add a task</legend>
                    <input 
                        type='text' 
                        id='task' 
                        name='task'
                        value={this.state.formState.task}
                        placeholder='create a task...'
                        onChange={this.handleChanges}/>
                    <button>Add Task</button>
                    <hr />
                    <button>Clear Completed</button>
                </fieldset>
            </form>
        )
    }
}

export default ToDoForm;
