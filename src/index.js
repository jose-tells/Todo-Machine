import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// Styles
import './assets/styles/Index.css';

// function App(props) {
//   return (
//     <h1>¡{props.saludo}, {props.name}!</h1>
//   )
// };

// function withSaludo(WrappedComponent) {
//   return function WrappedComponentWithSaludo(saludo) {
//     return function ComponenteDeVerdad(props) {
//       return (
//         <>
//           <WrappedComponent {...props} saludo={saludo} />
//           <p>Estoy acompañando al wrapped component</p>
//         </>
//       )
//     }
//   }
// }

// const AppWithSaludo = withSaludo(App)('xopaaa');

ReactDOM.render(
  <App />,
  document.getElementById('app')
);