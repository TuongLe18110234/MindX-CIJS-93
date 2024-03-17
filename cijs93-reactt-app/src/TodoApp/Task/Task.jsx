function Task(props) {
  return (
    <div>
      <input type="checkbox" />
      <p>{props.name}</p>
      <button>Remove</button>
    </div>
  )
}

export default Task;