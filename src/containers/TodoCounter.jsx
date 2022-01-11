import React from 'react';
// Styles
import '../assets/styles/TodoCounter.css';

const TodoCounter = ({ completedTodos, searchedTodos, loading }) => {
  return (
    <>
      <h2 className={`TodoCounter ${!!loading && 'TodoCounter__loading'}`}>
        Has completado
        {' '}
        {completedTodos.length}
        {' '}
        de
        {' '}
        {searchedTodos.length}
        {' '}
        ToDo's
      </h2>
    </>
  );
};

export { TodoCounter };
