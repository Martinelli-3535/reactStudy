import { useEffect } from "react";
import { useDispatch, useSelector } from "../../../node_modules/react-redux/es/exports";
import { changeField, initializeForm } from "../../modules/auth";
import AuthForm from "../../components/auth/AuthForm";

const LoginForm = () => {
    const dispatch = useDispatch();
    const { form } = useSelector(({ auth }) => ({
        form: auth.login
    }));
    // 인풋 변경 이벤트 핸들러
    const onChange = e => {
        const { value, name } = e.target;
        dispatch(
            changeField({
                form: 'login',
                key: name,
                value
            })
        )
    }
    // 폼 등록 이벤트 핸들러
const onSubmit = e => {
    e.preventDefault();
    //구현 예정
};

// 컴포넌트 처음 렌더링될때 form을 초기화함
useEffect(() => {
    
    dispatch(initializeForm('login'))
},[dispatch]);

return (
    <AuthForm 
    type='login'
    form={form}
    onChange={onChange}
    onSubmit={onSubmit}
    />
    )
};

export default LoginForm;
