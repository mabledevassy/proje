import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const M = () => {
    var[pagename,setpagename]=useState("Home Page");
    const gallerypage=()=>{
        setpagename("Gallery page")
    }
    const home = ()=>{
        setpagename("home Page")
    }
    const cont1= ()=>{
        setpagename("contact page")
    }
  return (
    <div>
      <Button variant="contained" color="primary" onClick={home}>Home Page</Button>
      <Button variant="contained" color="error" onClick={gallerypage}>Gallery Page</Button>
      <Button variant="contained" color="success" onClick={cont1}>Contact page</Button>
      <Typography>Welcome to {pagename}</Typography>
    </div>
  )
}

export default M
