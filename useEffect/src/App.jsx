import { useState, useEffect } from 'react'

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import {
  Button,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";

function App() {
let [num, setNum]=useState(0)
useEffect(()=>{
console.log({num})
});
  

  return (
    <>
    <h1>{num}</h1>
        <button onClick={()=>{setNum(num+1)}}>increment</button>
    </>
  )
}


export default App
