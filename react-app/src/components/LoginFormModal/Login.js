import React, { useState } from "react";
import LoginForm from '../auth/LoginForm'
import SignupForm from '../auth/SignupForm'

// import './Login.css'

function Login() {
  const [isRegister, setIsRegister] = useState(false);
  const onClick = () => {
    setIsRegister(!isRegister)
  }

  let component;
  if(isRegister){
    component = <SignupForm handleClick={onClick}/>
  } else{
    component = <LoginForm handleClick={onClick}/>
  }

  return (
    component
  );
}

export default Login;