import React from 'react';
import { AppUI } from './AppUI';
// Provider
import { TodoProvider } from './TodoContext';
// Styles
// import './assets/styles/App.css';

const App = () => {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
};

export default App;
