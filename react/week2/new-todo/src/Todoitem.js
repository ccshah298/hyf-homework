import React, { useState } from "react";

function Todoitem({ id, description, deleteItem }) {
  const [done, setDone] = useState(false);
  return (
    <div>
      <li
        style={
          done
            ? { textDecoration: "line-through" }
            : { textDecoration: "none" }}>
       
        {description}
        <span>
          <input type="checkbox" id={id} onClick={() => setDone(!done)} />
          <button onClick={deleteItem }>Delete</button>
        </span>
      </li>
    </div>
  );
}

export default Todoitem;