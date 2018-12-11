import React from 'react';

interface IProps {
  items: string[];
}

const TodoList: React.SFC<IProps> = ({ items }: IProps) => (
  <ul>
    {items.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </ul>
);

export default TodoList;
