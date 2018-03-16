export const Types = {
  ADD_TODO: "ADD_TODO",
  TOGGLE_TODO: "TOGGLE_TODO"
};

export function addTodo(todo) {
  return {
    type: Types.ADD_TODO,
    todo
  };
}

export function toggleTodo(todo) {
  return {
    type: Types.TOGGLE_TODO,
    todo
  };
}
