import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'

const Navbar = () => {
  return (
    <div>
      <AppBar>
        <Toolbar>
          <Typography variant="h6" >News</Typography>
          {/* <Button color="inherit">Login</Button>
           */}
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar
