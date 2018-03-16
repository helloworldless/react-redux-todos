import { Types } from "../actions/todoActions";

let id = 1;

export default function todoReducer(state = [], action) {
  switch (action.type) {
    case Types.ADD_TODO:
      return [
        ...state,
        Object.assign({}, { id: id++, ...action.todo, active: false })
      ];
    case Types.TOGGLE_TODO:
      return state.map(todo => {
        if (todo.id === action.todo.id) {
          const toggledTodo = Object.assign({}, action.todo);
          toggledTodo.active = !toggledTodo.active;
          return toggledTodo;
        }
        return todo;
      });
    default:
      return state;
  }
}
