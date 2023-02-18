import React from 'react';
import TaskTodoList from './tasktodolist.js';
import { useState, useRef, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';

const LOCAL_STORAGE_KEY= 'todoApp.tasktodos'

function App() {
    const [tasktodos, setTasktodos] = useState([])
    const tasktodoref = useRef()

   useEffect(() => {
        const storedTasktodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
        if (storedTasktodos) setTasktodos(prevTasktodos => [...prevTasktodos, ...storedTasktodos])
    }, [])

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tasktodos))
    }, [tasktodos])

    function toggletasktodos(id) {
        const newTasktodo = [...tasktodos]
        const togtasktodo = newTasktodo.find(togtasktodo => togtasktodo.id === id)
        togtasktodo.complete = !togtasktodo.complete
        setTasktodos(newTasktodo)
    }
    function handleAddTaskTodo(e) {
        const name = tasktodoref.current.value
        if (name === "") return
        tasktodoref.current.value = null
        setTasktodos(prevTasktodos => {
            return [...prevTasktodos, { id: uuidv4(), name: name, complete:false}]
        }
        )
          }
    function handleCompleteTask() {
        const updateTasktodo = tasktodos.filter(tasktodo => !tasktodo.complete)
        setTasktodos(updateTasktodo)
    }
    
    return (
        <React.Fragment>
            <TaskTodoList tasktodos={tasktodos} toggletasktodos={toggletasktodos } />
            <input ref={tasktodoref} type="text" />
            <div>
                <button onClick={ handleAddTaskTodo }>Add TaskToDo</button>
                <button onClick={ handleCompleteTask }>Clear Complete</button>
            </div>
            <div>{tasktodos.filter(tasktodo => !tasktodo.complete).length} left ToDo</div>
            </React.Fragment>
    );
    }

export default App;
