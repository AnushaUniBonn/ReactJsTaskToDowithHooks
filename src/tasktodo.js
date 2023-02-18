import React from 'react';



export default function TaskToDo({ tasktodo, toggletasktodos }) {
    function handleTasktodoclick() {
        toggletasktodos(tasktodo.id)
    }
    return (
        <React.Fragment>
            <label>
                <input type="checkbox" checked={tasktodo.complete} onChange={handleTasktodoclick} />
                {tasktodo.name}
                <br></br>
            </label>
         </React.Fragment>
    );
}