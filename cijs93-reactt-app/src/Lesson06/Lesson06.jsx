import { useState } from "react";
import NameCard from '../Lesson04/NameCard/NameCard'

function Lesson06() {
  const [input, setInput] = useState('');

  const handleClick = (event) => {
    console.log(input)
    event.preventDefault();
  }

  const handleInputChange = (event) => {
    console.log(event.target.checked);
    setInput(event.target.value);
  }

  const [people, setPeople] = useState([
    {
      name: 'MindX', age: 23
    },
    { name: 'React', age: 3}
  ]);

  const increaseAge = () => {
    console.log(people[0].age)
    people[0].age = people[0].age + 1;
    setPeople([...people]);
  }

  return (
    // <>
    //   <h1>Lesson 06</h1>
    //   <form onSubmit={handleClick}>
    //     <input type="text" value={input} onChange={handleInputChange}/>
    //     <button type="submit">Submit</button>     
    //     <input type="checkbox" onChange={handleInputChange}/>   
    //   </form>
    // </>
    <>
      <NameCard name={people[0].name} age={people[0].age} increaseAge={increaseAge}/>
      <NameCard name={people[1].name} age={people[1].age}/>
    </>
  )
}

export default Lesson06;