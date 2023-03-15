import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const Statebasic = () => {
    var [fname,setfname]=useState("Mable")
    const changeName=()=>{
        setfname("Mridula")
    }
  return (
    <div>
      <Typography variant='h6'> Welcome {fname}</Typography>
      <Button variant="contained" color='primary'onClick={changeName}>change name</Button><br></br>
      <Button variant="text">Login</Button><br></br>
      <Button variant="outlined">Submit</Button>
    </div>
  )
}

export default Statebasic
