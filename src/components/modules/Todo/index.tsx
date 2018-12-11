import React, { Component } from 'react';

import TodoList from './TodoList';
import TodoForm from './TodoForm';

interface IProps {
  items: string[];
}

interface IState {}

class Todo extends Component<IProps, IState> {
  state = {
    items: this.props.items || []
  };

  addTodo = (item: string) => {
    this.setState({ items: [...this.state.items, item] });
  };

  render() {
    const { items } = this.state;
    return (
      <div>
        <h3>TODO List</h3>
        <TodoForm addTodo={this.addTodo} />
        <TodoList items={items} />
      </div>
    );
  }
}

export default Todo;
