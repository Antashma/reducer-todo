import React from 'react';

class ToDo extends React.Component {
    render() {
        return (
            <div  className={`task ${this.props.taskData.completed ? 'completed' : ''}`} >
                {this.props.taskData.task}
                <fieldset>
                    <button onClick = {e => this.props.toggleComplete(this.props.taskData.id)}>✔</button>
                    <button>✖</button>
                </fieldset>
                
            </div>
            )
    }
}


export default ToDo;