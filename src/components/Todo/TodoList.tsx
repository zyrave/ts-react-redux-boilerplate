import React from 'react';

interface Props {
  items: string[];
}

const TodoList: React.SFC<Props> = ({ items }: Props) => (
  <ul>
    {items.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </ul>
);

export default TodoList;
