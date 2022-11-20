import styled from "styled-components"
import {useEffect, useState} from "react";
import {v4 as uuid} from 'uuid'

const TodoLists = [
    {
        id: uuid(),
        todo: '운동하기',
        complete: false
    },
    {
        id: uuid(),
        todo: '포켓몬 하기',
        complete: false
    }
]

const Title = styled.h1`
  font-family: 'Lato';
  font-style: normal;
  font-weight: 700;
  font-size: 31px;
  line-height: 37px;
  margin: 10px 0 30px 0;
  color: #000000;
`

const TodoInput = styled.input`
  width: 90%;
  font-size: 16px;
  font-weight: 500;
  background-color: #eee;
  border: 0;
  border-radius: .5em;
  box-sizing: border-box;
  padding: 1em;
`;

const Todo = styled.ul`
  display: flex;
  align-items: center;
  width: 100%;
  color: #555;
  padding: 0;
`;

const InputBtn = styled.input`
  appearance: none;
  margin-right: 0.5em;
  border: 1px solid #EA5959;
  border-radius: 8px;
  width: 20px;
  height: 19px;
  &:checked {
    border-color: transparent;
    background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
    background-size: 100% 100%;
    background-position: 50%;
    background-repeat: no-repeat;
    background-color: #EA5959;
  }
`

const DeleteBtn = styled.button`
    position: absolute;
    right: 2em;
    color: #e66;
    font-size: 20px;
    font-family: "Material Icons";
    border : none;
    background-color:#FFFFFF;
`

export default function TodoList() {

    const [todos, setTodos] = useState(TodoLists);

    const handleSubmit = (newTodo) => {
        const todo = {
            id: uuid(),
            todo: newTodo,
            complete: false
        }
        setTodos((prevState) => [...prevState, todo])
    }

    const deleteTodo = (id) => {
        setTodos((prevState) => prevState.filter(todo => todo.id !== id))
    }

    const addNewTodo = (e, newTodo) => {
        e.preventDefault()
        handleSubmit(newTodo)
        e.target[0].value = ''
    }

    const handleTodoChecked = (e, id)=>{
        setTodos(todos.map(item => item.id === id ? {...item, complete: !item.complete} :item ))
    }

    useEffect(()=>{
        console.log(todos)
    },[todos])

    return (
        <div>
            <Title>Todo List</Title>
            <form onSubmit={(e) =>
                addNewTodo(e, e.target[0].value)}>
                <TodoInput placeholder="할 일을 적어주세요."/>
            </form>
            <div>
                {todos.map((element) =>
                    <Todo key={element.id}>
                        <InputBtn type='checkbox' checked={element.complete} onChange={(e)=>handleTodoChecked(e, element.id)}/>
                        {element.todo}
                        <DeleteBtn onClick={() => deleteTodo(element.id)}>🗑</DeleteBtn>
                    </Todo>
                )}
            </div>
        </div>
    );
}

/* {TodoLists.map((element) =>
        <Todo>
          <InputBtn 
            type='checkbox' /> {element.todo}
        </Todo>
      )} */