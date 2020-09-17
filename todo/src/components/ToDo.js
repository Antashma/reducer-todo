import React from 'react';

class ToDo extends React.Component {
    render() {
        return <p className='task'>{this.props.taskData.task}</p>
    }
}


export default ToDo;