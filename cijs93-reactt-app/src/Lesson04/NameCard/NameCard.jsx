import { useState } from 'react';
import './NameCard.css'

function NameCard(props) {
  let i = 5;
  const [count, setCount] = useState(0);

  console.log(count, i, 'Namecard')

  i = 15;

  const setCountCount = () => {
    setCount(5);
  }
  
  console.log('Namecard');
  return (
    <div className="card">
      <div className="name">Name: {props.name}</div>
      <div className="age">Age: {props.age}</div>
      {props.children}
      <button onClick={props.increaseAge}>Inscrase Age</button>

      <button onClick={setCountCount}>Set count</button>
    </div>
  )
}

export default NameCard;