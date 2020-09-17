import React from 'react';

class ToDo extends React.Component {
    state = {
        isEditing: false,
        editedTask: ''
    }

    handleEdit = () => {
        this.setState({isEditing: !this.state.isEditing})
    }

    handleChanges = (e) => {
        this.setState({editedTask: e.target.value})
        console.log(this.state.editedTask)
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.editTask(this.state.editedTask, this.props.taskData.id)
        console.log(this.state.editedTask)
        this.setState({editedTask: '', isEditing: false})
    }

    render() {
        return (
            <div className='task'>
                <p style={{textDecoration: this.props.taskData.completed ? 'line-through' : 'none'}} onClick= {e => this.props.toggleComplete(this.props.taskData.id)}>
                    {this.props.taskData.task}
                </p>
                
                <button onClick = {this.handleEdit}> ✏ </button>
                {/* INPUT FOR EDITING IF TRUE */}
                {this.state.isEditing 
                    ? <form onSubmit={this.handleSubmit}><input type='text' value={this.state.editedTask} onChange={this.handleChanges} /><button type='submit'>Update Task</button></form> 
                    : ''
                }
            
                <button onClick= {e => this.props.deleteTask(this.props.taskData.id)}> ✖ </button>              
            </div>
        )
    }
}

export default ToDo;