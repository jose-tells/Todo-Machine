import React from 'react';
// Styles
import '../assets/styles/TodoList.css';

const TodoList = (props) => {
  return (
    <section>
      <ul>
        {props.children}
      </ul>
    </section>
  );
};

export { TodoList }