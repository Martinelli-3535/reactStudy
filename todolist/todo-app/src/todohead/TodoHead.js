import {React, useState} from 'react';
import styled from 'styled-components';

const TodoHeadBlock = styled.div`
  padding-top: 48px;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 24px;
  border-bottom: 1px solid #e9ecef;
  h1 {
    margin: 0;
    font-size: 36px;
    color: #343a40;
  }
  .day {
    margin-top: 4px;
    color: #868e96;
    font-size: 21px;
  }
  .tasks-left {
    color: #20c997;
    font-size: 18px;
    margin-top: 40px;
    font-weight: bold;
  }
`;

function TodoHead() {
  const [timer, setTimer] = useState('0');

  const currentTimer = () => {
    const date = new Date();
    const years = String(date.getFullYear());
    const months = String(date.getMonth());
    const days = String(date.getDay());
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    setTimer (`${years}년 ${months}월 ${days}일 ${hours}:${minutes}:${seconds}`);
  }

  const startTimer = () => {
    setInterval(currentTimer, 1000);
  }

  startTimer();

  return (
    <TodoHeadBlock>
      <h1>{timer}</h1>
      <div className="day">월요일</div>
      <div className="tasks-left">할 일 2개 남음</div>
    </TodoHeadBlock>
  );
}

export default TodoHead;