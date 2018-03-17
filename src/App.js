import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {toggleTodo, addTodo} from './actions/todoActions';
import Todo from './Todo';
import TodoInput from './TodoInput';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {currentTodoInput: {title: ''}};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({currentTodoInput: {title: e.target.value}});
  }
  handleSubmit(e) {
    e.preventDefault();
    const todo = {title: this.state.currentTodoInput.title};
    this.props.addTodo(todo);
    this.setState({currentTodoInput: {title: ''}});
  }
  render() {
    const todoRows = this.props.todos.map(todo => (
      <Todo
        key={todo.id}
        todo={todo}
        onClick={() => this.props.toggleTodo(todo)}
      />
    ));

    return (
      <div className="container">
        <h1>Todos</h1>
        <TodoInput
          currentTodoInput={this.state.currentTodoInput}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
        <table className="table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Completed</th>
            </tr>
          </thead>
          <tbody>{this.props.todos && todoRows}</tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {todos: state.todos};
};

// const mapDispatchToProps = dispatch => {
//   return { toggleTodo: dispatch(toggleTodo(todo)) };
// };

const mapDispatchToProps = {
  toggleTodo: toggleTodo,
  addTodo: addTodo
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
