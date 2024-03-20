import { useState } from "react";

function Lesson07() {
  const [todoItems, setTotoItems] =  useState([{name: 'Item 0', id: 0}]);
  const addItem = () => {
    setTotoItems((prev) => {
      let newItemId = prev[prev.length - 1].id + 1;
      return [...prev, {name: `Item ${newItemId}`, id: newItemId}];    })
  }
  const deleteItem = (id) => {
    const updatedItems = todoItems.filter(item => item.id != id)
    setTotoItems(updatedItems);
  }

  return (
    <>
      <h1>Lesson 07</h1>
      <button onClick={addItem}>Add</button>
      {
        todoItems.map((item) => {
          return <div key={item.id}>
            <span>{item.name}</span>
            {
              item.id % 2 == 0
                ? <span>Item chan</span>
                : <span>Item le</span>
            }
            <button onClick={() => deleteItem(item.id)}>Delete Item</button>
          </div>
        })
      }
    </>
  )
}

export default Lesson07;
