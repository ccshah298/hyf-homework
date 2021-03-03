import React, { useState } from "react";
import Todoitem from "./Todoitem";

function Todolist({ todos }) {
  const [itemList, setItemList] = useState(todos);

  function addNewItem() {
    const newItem = {
      id: Math.floor(Math.random() * 100),
      description: "add task",
    };
    setItemList(itemList.concat(newItem));
  }
    const deleteItem = (id) => {
      const todos = [...itemList];
      setItemList(todos.filter((todo) => todo.id !== id));
      };
  return (
    <div>
      <button onClick={addNewItem}>Add todo</button>
      {itemList.length > 0 ? (
        <ul>
          {itemList.map((todo) => (
            <Todoitem
              key={todo.id}
              id={todo.id + todo.description.slice(0, 2)}
              description={todo.description}
              onDelete={deleteItem}
            />
          ))}
        </ul>
      ) : (
        "empty"
      )}
    </div>
  );
}
export default Todolist;