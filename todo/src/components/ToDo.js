import React from 'react';

class ToDo extends React.Component {
    render() {
        return <p className='task' onClick={e => this.props.toggleComplete(this.props.taskData.id)}>{this.props.taskData.task}</p>
    }
}


export default ToDo;