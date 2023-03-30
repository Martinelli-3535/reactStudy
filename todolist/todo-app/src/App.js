import React from 'react';
import { createGlobalStyle } from 'styled-components';
import TodoList from './todolist/TodoList';


const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <TodoList />
    </>
  );
}

export default App;