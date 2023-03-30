import {React, useState, useRef, useCallback} from 'react';
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

function TodoList() {
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

  const todoCnt = todos.length;

  const nextId = useRef(5);

  const onInsert = useCallback(
    text => {
      const todo = {
        id : nextId.current,
        text,
        done : false 
      };
      setTodos(todos.concat(todo));
      nextId.current++;
    },
    [todos]
  );

  const onRemove = useCallback(id => {
    setTodos(todos.filter(todo => todo.id !== id));
  },[todos]);

  const onToggle = useCallback ( id => {
    setTodos(
      todos.map(todo => 
        todo.id === id ? {...todo, done: !todo.done} : todo)
    )
  },[todos]);


  return (  
    <TodoTemplate>
      <TodoHead todoCnt = {todoCnt}/>
      <TodoInsert onInsert={onInsert} />
      <TodoListBlock>
        <TodoListItem todos={todos} onRemove={onRemove} onToggle = {onToggle}/>
      </TodoListBlock> 
    </TodoTemplate>
  );
}

export default TodoList;
