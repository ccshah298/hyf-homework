import React, { useState,useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { toDate } from "date-fns";
import TodoItem from "./TodoItem";
const apiUrl =
  "https://gist.githubusercontent.com/benna100/391eee7a119b50bd2c5960ab51622532/raw";

function ToDoList(){
    const[descriptionNew,setDescriptionNew] = useState("");
    const[deadlineNew,setDeadlineNew] = useState(null);
    const [itemsArray, setItemsArray] = useState([]);
    const handleDescriptionChange = (event) => {
        setDescriptionNew(event.target.value);
      };
      const handleDeadlineChange = (input) => {
        setDeadlineNew(toDate(input)
        //setDeadlineNew(event.target.value)
        );
      };
      const fetchFromApi = () => {
        fetch(apiUrl)
          .then((response) => response.json())
          .then((data) => {
            setItemsArray(data);
          });
      };
    
      useEffect(() => {
        fetchFromApi();
      }, []);
      const addNewItem = (e) => {
        e.preventDefault();
        const newDeadlineMonth =
          deadlineNew.getMonth() + 1 < 10
            ? `0${deadlineNew.getMonth() + 1}`
            : deadlineNew.getMonth() + 1;
        const newDeadlineDate =
          deadlineNew.getDate() < 10
            ? `0${deadlineNew.getDate()}`
            : deadlineNew.getDate();
        const newDate = `${deadlineNew.getFullYear()}-${newDeadlineMonth}-${newDeadlineDate}`;
        const newTodo = {
          id: Math.floor(Math.random() * 100),
          description: descriptionNew,
          deadline: newDate,
        };
        setItemsArray((prev) => [...prev, newTodo]);
        setDescriptionNew("");
        setDeadlineNew(new Date());
      };
      const deleteItem = (e) => {
        const idDeleted = e.target.parentElement.previousSibling.id;
        setItemsArray(
          itemsArray.filter(
            (item) => item.id + item.description.slice(0, 2) !== idDeleted
          )
        );
      };
    return(
        <div>
        <form onSubmit={addNewItem}>
        <div>
            <label htmlFor="description">Name:</label>
          <input
            type="text"
            id="description"
            placeholder="Description"
            value={descriptionNew}
            onChange={handleDescriptionChange}
          />
        </div>
        <div>
        <label>Deadline</label>
        <DatePicker
          selected={deadlineNew}
          onChange={handleDeadlineChange}
          minDate={new Date()}
        />
        </div>
        <button type="submit">Add todo</button>
        {itemsArray.length > 0 ? (
        <ul>
          {itemsArray.map((todo) => (
            <TodoItem
              key={todo.id}
              id={todo.id + todo.description.slice(0, 2)}
              description={todo.description}
              deadline={todo.deadline}
              onDelete={deleteItem}
            />
          ))}
        </ul>) : (
        "empty")}
        </form>
        </div>
    )  
    
}
export default ToDoList;