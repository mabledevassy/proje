import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'
import M from './M'

const Counter = () => {
    var[value,set]=useState(0)
    const Add=()=>{
        set(++value)
    }
      const Mi=()=>{
        set(--value)
      }
  return (
    <div>
      <Typography>{value}</Typography>
      <Button variant="contained"color='error' onClick={Add}> add</Button>
      <Button variant="contained"color='success' onClick={Mi}>Minus</Button>
    </div>
  )
}

export default Counter
