import React, { useState } from "react";
import LoginForm from '../LoginForm'
import SignupForm from '../auth/SignupForm'

import './Signup.css'

function Signup() {
  const [isRegister, setIsRegister] = useState(true);
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

export default Signup;