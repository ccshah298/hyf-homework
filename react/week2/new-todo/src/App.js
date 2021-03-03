import "./App.css";
import Title from "./Title";
import Todolist from "./Todolist";

const todos = [
  {
    id: 1,
    description: "Get out of bed",
  },
  {
    id: 2,
    description: "Brush teeth",
  },
  {
    id: 3,
    description: "Eat breakfast",
  },
];

function App() {
  return (
    <div className="App">
      <Title />
      <Todolist todos={todos} />
    </div>
  );
}

export default App;