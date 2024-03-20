import { useState } from "react";
import Task from "./Task/Task";

function TodoApp() {
  const [taskName, setTaskName] = useState('');
  const [tasks, setTasks] = useState([]);

  const onInputTaskChange = (event) => {
    setTaskName(event.target.value);
  }
  
  const addTask = () => {
    const newTask = {
      name: taskName,
      id: tasks.length == 0
          ? 0
          : tasks[tasks.length - 1].id + 1
    }
    
    setTasks(prev => {
      return [...prev, newTask]
    })
  }
  return (
    <>
      <h1>Todo App</h1>
      <input onChange={onInputTaskChange} placeholder="Add something to do"></input>
      <button onClick={addTask}>Save</button>
      {
        tasks.map(task => {
          return <Task key={task.id} task={task} />
        })
      }
    </>
  )
}

export default TodoApp;