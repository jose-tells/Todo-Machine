import React from 'react';
// Styles
import '../assets/styles/CreateTodoButton.css';

const CreateTodoButton = (props) => {
  const handleClick = () => {
    props.setOpenModal((prevState) => !prevState);
  }

  return (
    <button
      className={`CreateTodoButton ${props.openModal && 'openModal'}`}
      onClick={handleClick}
    >
      +
    </button>
  );
};

export { CreateTodoButton };