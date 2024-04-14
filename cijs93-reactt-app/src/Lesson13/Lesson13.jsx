import { useEffect, useState } from "react";
import { useInput } from "../hooks/useInput";
import { useHover  } from "@uidotdev/usehooks";

function getRandomColor() {
  const colors = ["green", "blue", "purple", "red", "pink"];
  console.log('Random color: ', colors[Math.floor(Math.random() * colors.length)]);
  return colors[Math.floor(Math.random() * colors.length)];
}

function Lesson13() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');

    if (storedTasks != null) {
      setTasks(JSON.parse(storedTasks));
      console.log('Tasks: ', tasks);
      console.log('Stored tasks: ', storedTasks);
    }
  }, []);

  return (
    <>
      <h1>Lesson 13</h1>
      <h2>Tasks</h2>
      {tasks.map((task, index) => {
        return (
          <div key={index}>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
          </div>
        );
      })}
    </>
  )

  // const [ref, hovering] = useHover();

  // const backgroundColor = hovering
  //   ? `${getRandomColor()}`
  //   : "yellow";

  // return (
  //   <section>
  //     <h1>useHover</h1>
  //     <article ref={ref} style={{ backgroundColor }}>
  //       Hovering? {hovering ? "Yes" : "No"}
  //     </article>
  //   </section>
  // );

  // const email = useInput(localStorage.getItem('email')); // {value: "", onChange: f}
  // const password = useInput("");
  // const reEnterPassword = useInput("");

  // return (
  //   <div>
  //     <h1>Lesson 13: React Router</h1>

  //     <h2>Sign Up</h2>

  //     <input type="email" value={email.value} onChange={email.onChange} placeholder="Enter Email" />
  //     <input type="password" value={password.value} onChange={password.onChange} placeholder="Enter Password" />
  //     <input type="password" value={reEnterPassword.value} onChange={reEnterPassword.onChange} placeholder="Re-enter Password" />
  //   </div>
  // );

  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [reEnterPassword, setReEnterPassword] = useState("");

  // const onChangeEmail = (e) => {
  //   setEmail(e.target.value);
  //   console.log('Email: ', email);
  // }

  // const onChangePassword = (e) => {
  //   setPassword(e.target.value);
  //   console.log('Password: ', password);
  // }

  // const onChangeReEnterPassword = (e) => {
  //   setReEnterPassword(e.target.value);;
  //   console.log('Re-enter Password: ', reEnterPassword);
  // }

  // return (
  //   <div>
  //     <h1>Lesson 13: React Router</h1>

  //     <h2>Sign Up</h2>

  //     <input type="email" value={email} onChange={onChangeEmail} placeholder="Enter Email" />
  //     <input type="password" value={password} onChange={onChangePassword} placeholder="Enter Password" />
  //     <input type="password" value={reEnterPassword} onChange={onChangeReEnterPassword} placeholder="Re-enter Password" />
  //   </div>
  // );
}

export default Lesson13;