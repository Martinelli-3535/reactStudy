import { IoIosAddCircle } from 'react-icons/io'
import { useCallback, useState } from 'react';
import styled from 'styled-components';

const Insertinput = styled.input`
    width: 250px;
    height: 30px;
    margin-left: 35px;
    border: 1px solid #ced4da;
    text-indent: 15px;
    border-radius: 40px;

    ::placeholder {
       text-indent: 15px;
    }
` 
const InsertForm = styled.form`
    display: flex;
    margin-top: 15px;
    margin-bottom: -10px;
`

const SubmitBtn = styled.button`
    width: 40px;
    border: none;
    background: white;
    height: 35px;

    &:hover {
        color: grey;
    }
`

const TodoInsert = ({ onInsert }) => {
    const [value, setValue] = useState('');

    const onChange = useCallback(e => {
        setValue(e.target.value);
    },[]);

    const onSubmit = useCallback(e => {
        onInsert(value);
        setValue('');
        e.preventDefault();
    }, [onInsert, value]);

    return(
        <InsertForm onSubmit={onSubmit}>
            <Insertinput placeholder='할 일을 입력하시오' 
            value = {value}
            onChange={onChange}/>
            <SubmitBtn type='submit'>
                <IoIosAddCircle size="33" color="#38d9a9"/>
            </SubmitBtn>
        </InsertForm>
    )
}

export default TodoInsert;