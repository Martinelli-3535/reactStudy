import React from 'react';
import { createGlobalStyle } from 'styled-components';
import TodoTemplate from './todotemplate/TodoTemplate';
import TodoHead from './todohead/TodoHead';
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
      <TodoTemplate>
        <TodoHead />
        <TodoList />
      </TodoTemplate>
    </>
  );
}

export default App;