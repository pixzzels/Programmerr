import React, { useState } from "react";
import LoginForm from '../LoginForm'
import SignupForm from '../SignupForm'

import './LoginSignupForm.css'

function LoginSignupForm() {
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

export default LoginSignupForm;