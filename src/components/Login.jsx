import React from 'react'
import { Button, TextField } from '@mui/material';


const Login = () => {
  return (
    <div>
      <p><TextField label='Username' variant="outlined"/></p><br></br>
      <p><TextField label='Username' variant="filled"/></p><br></br>
      <TextField label='Username' variant="standard"/><br></br>
      <Button variant='text'>Login</Button><br></br>
      <Button variant='contained' color='secondary'>Login</Button><br></br>
      <Button variant='outlined'>Login</Button>
    </div>
  )
}

export default Login
