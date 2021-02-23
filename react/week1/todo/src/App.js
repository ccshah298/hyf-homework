import React from 'react';
import './App.css';
import Title from './Title';
import ToDoItem from './ToDoItem';
const toDoList = [
  { description: "get out of bed", deadline: "wed sep 13 2017" },
  { description: "Brush Teeth", deadline: "Thu sep 13 2017" },
  { description: "Eat breakfast", deadline: "wed sep 13 2017" },
];
function App() {
  return (
    <div className="App">
   <Title/>
      <ul>
          {toDoList.map(todo => <ToDoItem description={todo.description} deadline={todo.deadline} />)}
      </ul>
    </div>
  );
}



export default App;
