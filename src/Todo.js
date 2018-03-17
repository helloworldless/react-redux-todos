import React from 'react';

// style = {{
//   color: "red",
//     textDecoration: todo.active ? "none" : "line-through"
// }}

const Todo = ({todo, onClick}) => {
  return (
    <tr
      className={'todo-' + todo.active ? 'active' : 'inactive'}
      onClick={onClick}
    >
      <td>{todo.id}</td>
      <td>{todo.title}</td>
      <td>{todo.active.toString()}</td>
    </tr>
  );
};

export default Todo;
