import { useState } from "react";

const IterationSample = () => {
  const [names, setNames] = useState([
    { id: 1, text: "눈사람" },
    { id: 2, text: "얼음" },
    { id: 3, text: "눈" },
    { id: 4, text: "바람" },
  ]);

  const [inputText, setInputText] = useState("");
  const [nextId, setNextId] = useState(5);
  const [visible, setVisible] = useState(false);

  const onChange = e => setInputText(e.target.value);
  const onClick = () => {
    const nextNames = names.concat({
      id: nextId,
      text: inputText
   });
   setNames(nextNames);
   setNextId(nextId+1);
   setInputText('');
  }

  const onKeyPress = e => {
    if (e.key === 'Enter') {
      onClick();
    }
  }

  const onVisible = () => {
    setVisible(!visible);
  }

  const onRemove = id => {
    const nextNames = names.filter(num => num.id !== id);
    setNames(nextNames);
  }

  const namesList = names.map((name) => <li key={name.id} onDoubleClick={() => onRemove(name.id)}>{name.text}</li>);
  return (
    <>
      <button onClick={onVisible}>보이게 하기</button>
      {visible && 
        <>
          <input value={inputText} onChange={onChange} onKeyPress={onKeyPress} />
          <button onClick={onClick}>추가</button>
          <ul>{namesList}</ul>
        </>
      }
    </>
  )
};

export default IterationSample;
