import React from "react";

function ToDoItem(props) {
    return ( 
        <li>
            {props.description}, {props.deadline}
        </li>
       
    )
}

export default ToDoItem; 