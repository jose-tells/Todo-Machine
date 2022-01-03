import React from 'react';
// Styles
import '../assets/styles/TodoCounter.css';

const TodoCounter = (props) => {
  return (
    <>
      {props.children}
    </>
  );
};

export { TodoCounter };
