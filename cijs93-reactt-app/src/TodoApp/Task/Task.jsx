import './Task.css';

import { useState } from 'react';

function Task(props) {
  const [editMode, setEditMode] = useState(false);

  const changeEditMode = () => {
    setEditMode(true);
    console.log(editMode);
  }

  return (
    <div className="task">
      <input type="checkbox" />
      {
        editMode
        ? <input className="task-name" placeholder="Add something to do" value={props.task?.name}></input>
        : <span onClick={changeEditMode} className="task-name">{props.task?.name}</span>
      }
      <button>Remove</button>
    </div>
  )
}

export default Task;