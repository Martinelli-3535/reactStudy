import { useState } from "react";
import { Link } from "react-router-dom";



const Login = () => {
    const [id, setId] = useState('');
    const [passwd, setPasswd] = useState(''); 
    const [testbody, setTestbody] = useState('');

    const submitId = ()=>{
        const post ={
          test: testbody
        };
       
        fetch("http://localhost:3001/idplz", {
          method : "post", // 통신방법
          headers : {
            "content-type" : "application/json",
          },
          body : JSON.stringify(post),
        })
        .then((res) => res.json())
        .then((json) => {
            setTestbody(json.text)
        });
      };

    return (
        <div>
            <h2>로그인 </h2>
            <input type="text"
                   placeholder="아이디" 
                   onChange={(e) => {
                    setId(e.target.value);
                    console.log(id);
                }
            }/><br />
            <input type="password" 
                   placeholder="비밀번호"
                   onChange={(e) => 
                setPasswd(e.target.value)
                }/>
            <button onClick={submitId}>
                <Link to='/Home'>로그인</Link>
            </button>
        </div>
    )
}

export default Login;

