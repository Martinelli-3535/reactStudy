import {React, useState, useRef, useCallback, useReducer} from 'react';
import styled from 'styled-components';
import TodoListItem from '../todolistitem/TodoListItem';
import TodoHead from '../todohead/TodoHead';
import TodoInsert from '../todoinsert/TodoInsert';
import TodoTemplate from '../todotemplate/TodoTemplate';

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;

function todoReducer(todos, action) {
  switch(action.type) {
    case 'INSERT': 
      return todos.concat(action.todo);

    case 'REMOVE':
      return todos.filter(todo => todo.id !== action.id)

    case 'TOGGLE':
      return todos.map(todo =>
        todo.id === action.id ? {...todo, done: !todo.done} : todo);

    default:
      return todos;
    }
}


function TodoList() {
  const [todo, dispatch] = useReducer(todoReducer, todos)
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '프로젝트 생성하기',
      done: true
    },
    {
      id: 2,
      text: '컴포넌트 스타일링 해보기',
      done: true
    },
    {
      id: 3,
      text: 'Context 만들기',
      done: false
    },
    {
      id: 4,
      text: '일정 관리 앱 만들어 보기',
      done: false
    }
  ]);


  const nextId = useRef(5);

  /* const onInsert = useCallback(
    text => {
      const todo = {
        id : nextId.current,
        text,
        done : false 
      };
      setTodos(todos => todos.concat(todo));
      nextId.current++;
    },
    []
  ); */

  const onInsert = useCallback(text => {
    const todo = {
      id : nextId.current,
      text,
      checked: false
    }
    dispatch({type: 'INSERT', todo});
    nextId.current++;
  },[]);

/*   const onRemove = useCallback(id => {
    setTodos(todos => todos.filter(todo => todo.id !== id));
  },[]); */

  const onRemove = useCallback(id => {
    dispatch({type: 'REMOVE', id})
  },[]); 

  /* const onToggle = useCallback ( id => {
    setTodos(
      todos => todos.map(todo => 
        todo.id === id ? {...todo, done: !todo.done} : todo)
    )
  },[]); */

  const onToggle = useCallback ( id => {
    dispatch({type: 'TOGGLE', id});
  },[]);


  return (  
    <TodoTemplate>
      <TodoHead todos = {todos} />
      <TodoInsert onInsert={onInsert} />
      <TodoListBlock>
        <TodoListItem todos={todos} onRemove={onRemove} onToggle={onToggle} />
      </TodoListBlock> 
    </TodoTemplate>
  );
}

export default TodoList;
