import React from 'react';

export function useFilterTodos(defaultTodos) {
  const [searchValue, setSearchValue] = React.useState('');
  const [searchedTodos, setSearchedTodos] = React.useState(defaultTodos);

  React.useMemo(() => {
    const result = defaultTodos.filter((todo) => {
      return todo.text.toLowerCase().includes(searchValue.toLowerCase());
    });
    setSearchedTodos(result);
  }, [searchValue, defaultTodos]);

  return {
    searchValue,
    setSearchValue,
    searchedTodos,
  }
};