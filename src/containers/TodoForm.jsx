import React from 'react';
// useContext
import { TodoContext } from '../TodoContext';
// Styles
import '../assets/styles/TodoForm.css';

const TodoForm = () => {
  const { setOpenModal, onAdd } = React.useContext(TodoContext);
  const [todoValue, setTodoValue] = React.useState('');

  const handleCancel = () => {
    setOpenModal(false);
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    onAdd(todoValue);
    setOpenModal(false);
  };

  const handleChange = (event) => {
    setTodoValue(event.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='todo'>Escribe tu nuevo TODO</label>
      <textarea
        id='todo'
        value={todoValue}
        onChange={handleChange}
        placeholder='Ej. Hacer 1h de ejercicio'
      />
      <div className='TodoForm-buttonContainer'>
        <button
          type='button'
          onClick={handleCancel}
          className='TodoForm-button TodoForm-button-cancel'
        >
          Cancelar
        </button>
        <button
          type='submit'
          className='TodoForm-button TodoForm-button-add'
        >
          Añadir
        </button>
      </div>
    </form>
  );
};

export { TodoForm };