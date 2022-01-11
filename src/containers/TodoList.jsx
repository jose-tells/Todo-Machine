import React from 'react';
// Styles
import '../assets/styles/TodoList.css';

const TodoList = (props) => {
  return (
    <section className='TodoList__container'>
      {props.error && props.onError()}
      {props.loading && props.onLoading()}

      {(!props.loading && !props.totalTodos) && props.onEmptyTodos()}

      {!props.loading && props.searchedTodos.map(props.render || props.children)}

      {(!!props.totalTodos && !props.searchedTodos.length) && props.onEmptySearchResult(props.searchText)}
    </section>
  );
};

export { TodoList }