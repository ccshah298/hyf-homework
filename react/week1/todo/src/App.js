import React from 'react';
import './App.css';
import ToDoList from './ToDoList';
import ToDoItem from './ToDoItem';
const toDoThing = [
  { description: "get out of bed", deadline: "wed sep 13 2017" },
  { description: "Brush Teeth", deadline: "Thu sep 13 2017" },
  { description: "Eat breakfast", deadline: "wed sep 13 2017" },
];
function App() {
  return (
    <div className="App">
   <ToDoList/>
      <ul>
          {toDoThing.map(todo => <ToDoItem description={todo.description} deadline={todo.deadline} />)}
      </ul>
    </div>
  );
}



export default App;
