import React from 'react';
import TaskToDo from './tasktodo';

export default function TaskTodoList({ tasktodos, toggletasktodos }) {
    return (
        <React.Fragment>
            <strong> ToDo List :</strong>
            <span>Number of Todos= </span>
            <span>{tasktodos.length}</span>
            <div> ToDo Items: </div>
            <div>
                {tasktodos.map(tasktodo =>
                    <TaskToDo key={tasktodo.id} toggletasktodos={toggletasktodos} tasktodo={tasktodo} />
                )}
            </div>
        </React.Fragment>
    );
}