import React, { useState } from "react";
import PropTypes from "prop-types";

const StyleBorder = (props) => {
  return (
    <div
      className="style_border"
      style={{ border: "1px dotted blue"}}
    >
      {props.children}
    </div>
  );
};
function TodoItem({ id, description, deadline, onDelete }) {
    const [yesDone, setYesDone] = useState(false);
    const [editing, setEditing] = useState(false);
    const [heading, setHeading] = useState(description);
    const updatingItem = () => {
      setEditing(!editing);
    };
    const updatingDescription = (event) => {
      setHeading(event.target.value);
    };
  
    return (
      <div>
        <StyleBorder>
          <li
            style={
                yesDone
                ? { textDecoration: "line-through" }
                : { textDecoration: "none" }
            }
          >
            {editing ? (
              <input type="text" value={heading} onChange={updatingDescription} />
            ) : (
             heading
            )}
  
            <span className="item_span">{deadline}</span>
            <span className="item_span">
              <input type="checkbox" id={id} onClick={() => setYesDone(!yesDone)} />
              <span className="item_span">
                <button onClick={onDelete}>Delete</button>
                <button onClick={updatingItem}>
                  {editing ? "Update" : "Edit"}
                </button>
              </span>
            </span>
          </li>
        </StyleBorder>
      </div>
    );
  }
  TodoItem.propTypes = {
    description: PropTypes.string,
    deadline: PropTypes.string,
    onDelete: PropTypes.func,
  };
  
  export default TodoItem;