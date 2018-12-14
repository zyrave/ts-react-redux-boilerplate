import React, { Component } from 'react';

interface Props {
  addTodo(item: string): void;
}

interface State {
  item: string;
}

class Index extends Component<Props, State> {
  state = {
    item: ''
  };

  handleChange = (e: any) => {
    this.setState({ item: e.target.value });
  };

  handleSubmit = (e: any) => {
    const { addTodo } = this.props;
    e.preventDefault();
    addTodo(this.state.item);
    this.setState({ item: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          // ref="item"
          value={this.state.item}
          onChange={this.handleChange}
        />
        <button type="submit">Add</button>
      </form>
    );
  }
}

export default Index;
