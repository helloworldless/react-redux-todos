import React from "react";

// style = {{
//   color: "red",
//     textDecoration: todo.active ? "none" : "line-through"
// }}

const Todo = ({ todo, onClick }) => {
  return (
    <div
      className={"todo-" + todo.active ? "active" : "inactive"}
      onClick={onClick}
    >
      {todo.id}. {todo.title} {todo.active.toString()}
    </div>
  );
};

export default Todo;
