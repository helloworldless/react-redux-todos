import React from 'react';

const TodoInput = ({handleSubmit, handleChange, currentTodoInput}) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        className="form-control"
        type="text"
        value={currentTodoInput.title}
        onChange={handleChange}
      />
      <button className="btn btn-primary" type="submit">
        Add
      </button>
    </form>
  );
};

// class TodoInput extends PureComponent {
//   constructor(props) {
//     super(props);
//     // console.log(this.props.length, props.length);
//     // console.log(JSON.stringify(this.props));
//     // console.log(JSON.stringify(props));
//     // const {handleChange, handleSubmit} = this.props;
//     const handleChange = this.props.handleChange;
//     const handleSubmit = this.props.handleSubmit;
//     // console.log(handleChange);
//     console.log(handleSubmit.toString());
//     console.log(this);
//   }
//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <input type="text" onChange={this.handleChange} />
//         <input type="submit" />
//       </form>
//     );
//   }
// }

export default TodoInput;
