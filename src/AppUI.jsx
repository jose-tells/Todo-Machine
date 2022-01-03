import React from 'react';
// Modal
import { Modal } from './Modal';
// Components
import { CreateTodoButton } from './components/CreateTodoButton';
import { TodoItem } from './components/TodoItem';
import { TodoCounter } from './containers/TodoCounter';
import { TodoList } from './containers/TodoList';
import { TodoSearch } from './containers/TodoSearch';
// Provider
import { TodoContext } from './TodoContext';
import { TodoForm } from './containers/TodoForm';

const AppUI = () => {
  const {
    completedTodos,
    searchedTodos,
    searchValue,
    onDelete,
    onComplete,
    handleChange,
    error,
    loading,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);

  return (
    <>
      <TodoCounter>
        <h2 className='TodoCounter'>
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
      </TodoCounter>
      <TodoSearch>
        <input
          className='TodoSearch'
          placeholder='cebolla'
          value={searchValue}
          onChange={handleChange}
        />
      </TodoSearch>
      <TodoList>
        {error && <p>Hey que xopa io, hay un error brokis</p>}
        {loading && <p>Estamos cargando manito, suave</p>}
        {(!loading && !searchedTodos.length) && <p>Crea tu primer to do!</p>}
        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => onComplete(todo.text, todo.completed)}
            onDelete={() => onDelete(todo.text)}
          />
        ))}
      </TodoList>
      <CreateTodoButton
        openModal={openModal}
        setOpenModal={setOpenModal}
      />

      {openModal && (
        <Modal>
          <TodoForm />
          {/* OPTIONAL CHAINING is like: (searchedTodos ? searchedTodos.text : undefined) */}
        </Modal>
      )}
    </>
  )
};

export { AppUI }