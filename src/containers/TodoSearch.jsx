import React from 'react';
// Styles
import '../assets/styles/TodoSearch.css';

const TodoSearch = ({ searchValue, handleChange, loading }) => {
  return (
    <>
      <input
        className='TodoSearch'
        placeholder='cebolla'
        value={searchValue}
        onChange={handleChange}
        disabled={loading}
      />
    </>
  )
};

export { TodoSearch };