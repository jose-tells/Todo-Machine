import React from 'react';
// Styles
import '../assets/styles/TodoItem.css';

const TodoItem = (props) => {
  const {
    completed,
    text,
    onComplete,
    onDelete
  } = props;

  return (
    <li className='TodoItem'>
      <span
        className={`Icon Icon-check ${completed && 'Icon-check--active'}`}
        onClick={onComplete}
      >
        {'\u2713'}
      </span>
      {/* For unicode use quotes to set the code */}
      <p
        className={`TodoItem-p ${completed && 'TodoItem-p--complete'}`}
      >
        {text}
      </p>
      <span
        className='Icon Icon-delete'
        onClick={onDelete}
      >
        X
      </span>
    </li>
  )
};

export { TodoItem }