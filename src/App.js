import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { toggleTodo, addTodo } from "./actions/todoActions";
import Todo from "./Todo";

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { title: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({ title: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();
    const todo = { title: this.state.title };
    this.props.addTodo(todo);
  }
  render() {
    return (
      <div>
        <h1>Todos</h1>
        {this.props.todos &&
          this.props.todos.map(todo => (
            <Todo
              key={todo.id}
              todo={todo}
              onClick={() => this.props.toggleTodo(todo)}
            />
          ))}
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange} />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { todos: state.todos };
};

// const mapDispatchToProps = dispatch => {
//   return { toggleTodo: dispatch(toggleTodo(todo)) };
// };

const mapDispatchToProps = {
  toggleTodo: toggleTodo,
  addTodo: addTodo
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
