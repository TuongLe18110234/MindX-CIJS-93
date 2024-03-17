import Task from "./Task/Task";

function TodoApp(props) {
  return (
    <>
      <h1>Todo App</h1>
      <input placeholder="Add something to do"></input>
      <button>Save</button>
      <Task name='Homework lessom 04' />
      <Task name='Homework lessom 05' />
      <Task name='Homework lessom 06' />
      <Task name='Homework lessom 07' />
    </>
  )
}

export default TodoApp;