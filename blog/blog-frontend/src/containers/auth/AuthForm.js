const AuthForm = ({ type, form, onChange, onsubmit}) => {
    const text = textMap[type];
    return (
        <AuthFormBlock>
            <h3>{text}</h3>
            <form onSubmit={onSubmit}>
                <StyledInput
                    autoComplete="username"
                    name="username"
                    placeholder="아이디"
                />
            </form>
        </AuthFormBlock>
    )
}