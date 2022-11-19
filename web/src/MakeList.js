import React from "react";
import {useState} from "react";
import styled from "styled-components";
import TodoList from "./TodoList";
import Weather from "./Weather";
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

const ListBox = styled.div`
  padding-top: 8em;
  text-align: center;
  width: 18vw;
  height: 100vh;
`
const List = styled.div`
  font-family: 'Lato';
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 26px;
  margin: 0px 23px 17px; 
  color: #525252;

  ${props => props.isSelected && `
  color: #EA5959;
  `
  }
`
const ContentBox = styled.div`
  width: 100%;
  padding: 2em;
  height: 637px;
  border-left: 1px solid #D8D8D8;
`

const Border = styled.div`
  position: absolute;
  width: 984px;
  height: 700px;
  left: 228px;
  top: 161px;

  background: #FFFFFF;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  `

export default function MakeList() {
  const [content, setContent] = useState('')
  const ListChange = (e, content) => {
    setContent(content)
  }

  return (
    <Border style={{display: "flex"}}>
      <ListBox>
      <Link to="/todolist">
        <List isSelected = {content === 'todo_list'} onClick={(e)=>ListChange(e, 'todo_list')}>Todo List</List>
      </Link>
      <Link to="/weather">
        <List isSelected = {content === 'weather'} onClick={(e)=>ListChange(e, 'weather')}>Weather</List>
      </Link>
      </ListBox>
      <ContentBox>
        <Outlet/>
      </ContentBox>
    </Border>
  );
}