import React from 'react'
import { GoogleLogin } from '@react-oauth/google';


const GOOGLE_ID = "1059202553892-1uqf8lddnp1jefmetq5cirq1ba934ntc.apps.googleusercontent.com";

const Login = () => {
  const loginSuccess = (result) => {
    console.log(result);
  };  
  const loginFailure = (result) => {
    console.log(result);
  };

  return (
    <GoogleLogin
    clientId={GOOGLE_ID}
    onSuccess={loginSuccess}
    onError={loginFailure}
    text="signin"

    />
  )
}

export default Login