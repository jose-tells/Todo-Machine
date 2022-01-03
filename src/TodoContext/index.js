import React from 'react';
// Hooks
import { useFilterTodos } from '../hooks/useFilterTodos';
import { useLocalStorage } from '../hooks/useLocalStorage';


const TodoContext = React.createContext();

function TodoProvider(props) {
  const [openModal, setOpenModal] = React.useState(false);

  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage('TODOS_V1', [])

  const {
    searchValue,
    setSearchValue,
    searchedTodos,
  } = useFilterTodos(todos);

  const handleChange = (event) => {
    setSearchValue(event.target.value)
  };

  const completedTodos = todos.filter((todo) => todo.completed);

  const onAdd = (text) => {
    const newTodos = [...todos];
    newTodos.push({
      completed: false,
      text,
    });
    saveTodos(newTodos);
  }

  const onComplete = (text, todoState) => {
    const todoIndex = todos.findIndex((todo) => text === todo.text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = !todoState;
    saveTodos(newTodos);
  };

  const onDelete = (text) => {
    const newTodos = todos.filter((todo) => {
      return text !== todo.text
    });
    saveTodos(newTodos);
  };

  return (
    <TodoContext.Provider value={{
      loading,
      error,
      searchValue,
      searchedTodos,
      handleChange,
      completedTodos,
      onAdd,
      onComplete,
      onDelete,
      openModal,
      setOpenModal,
    }}>
      {props.children}
    </TodoContext.Provider>
  )
};

export { TodoProvider, TodoContext };
