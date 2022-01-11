import React from 'react';
// Components
import { TodoHeader } from './containers/TodoHeader';
import { CreateTodoButton } from './components/CreateTodoButton';
import { TodoItem } from './components/TodoItem';
import { TodoCounter } from './containers/TodoCounter';
import { TodoList } from './containers/TodoList';
import { TodoSearch } from './containers/TodoSearch';
import { TodoForm } from './containers/TodoForm';
import { TodosError } from './containers/TodosError';
import { TodosLoading } from './containers/EmptyTodos';
import { EmptyTodos } from './containers/TodosLoading';
// ChangeAlert
import { ChangeAlert } from './ChangeAlert'
// Modal
import { Modal } from './containers/Modal';
// Custom hooks
import { useTodos } from './hooks/useTodos';
// Styles
import './assets/styles/App.css';
import { LoadingSkeleton } from './containers/LoadingSkeleton';

const App = () => {
  const {
    completedTodos,
    totalTodos,
    searchedTodos,
    searchValue,
    onAdd,
    onDelete,
    onComplete,
    handleChange,
    error,
    loading,
    openModal,
    setOpenModal,
    synchronizeTodos,
  } = useTodos();

  return (
    <>
      <ChangeAlert synchronize={synchronizeTodos} />

      <TodoHeader loading={loading}>
        <TodoCounter
          completedTodos={completedTodos}
          searchedTodos={searchedTodos}
        />
        <TodoSearch
          searchValue={searchValue}
          handleChange={handleChange}
        />
      </TodoHeader>


      <LoadingSkeleton />
      {/* <TodoList
        error={error}
        loading={loading}
        totalTodos={totalTodos}
        searchedTodos={searchedTodos}
        searchText={searchValue}
        onError={() => <TodosError />}
        onLoading={() => <TodosLoading />}
        onEmptyTodos={() => <EmptyTodos />}
        onEmptySearchResult={
          (searchedText) => <p>No hay resultados para {searchedText}</p>
        }
      // render={todo => (
      //   <TodoItem
      //     key={todo.text}
      //     text={todo.text}
      //     completed={todo.completed}
      //     onComplete={() => onComplete(todo.text, todo.completed)}
      //     onDelete={() => onDelete(todo.text)}
      //   />
      // )}
      >
        {todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => onComplete(todo.text, todo.completed)}
            onDelete={() => onDelete(todo.text)}
          />
        )}
      </TodoList> */}

      {openModal && (
        <Modal>
          <TodoForm
            setOpenModal={setOpenModal}
            onAdd={onAdd}
          />
          {/* OPTIONAL CHAINING is like: (searchedTodos ? searchedTodos.text : undefined) */}
        </Modal>
      )}

      <CreateTodoButton
        openModal={openModal}
        setOpenModal={setOpenModal}
      />

    </>
  )
};

export default App;
