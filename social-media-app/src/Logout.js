import React from 'react'
import { googleLogout } from '@react-oauth/google';
import { Button } from '@mui/material';

const GOOGLE_ID = "1059202553892-1uqf8lddnp1jefmetq5cirq1ba934ntc.apps.googleusercontent.com";

const Logout = () => {
    const logoutSuccess = () => {
        googleLogout();
    };
  return (
    <Button onClick={logoutSuccess}>Sign Out</Button>
  )
}

export default Logout