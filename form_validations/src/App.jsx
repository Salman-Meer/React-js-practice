import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import {useState} from 'react'

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
 


import './App.css'

function App() {
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");

function form_validation(e){
  e.preventDefault();

  console.log('form submitted successfully');
  console.log('name=',name);
  console.log('email=',email);
  console.log('password=',password);
  
}
   return (
    <form onSubmit={form_validation}>
   
      Name: <TextField id="standard-basic" value={name} label="write your name" name="name" variant="standard" 
      onChange={(e) => {
  setName(e.target.value);
  console.log("typing:", e.target.value);
}} />
      <br />
     Email: <TextField id="outlined-basic" value={email} label="write your email" name="email" variant="outlined" 
     onChange={(e) => {
  setEmail(e.target.value);
  console.log("typing:", e.target.value);
}} />
     <br />
      Passoword:<TextField id="filled-basic" label="Enter password" name="password" variant="filled"
      onChange={(e) => {
  setPassword(e.target.value);
  console.log("typing:", e.target.value);
}} />
      <Stack spacing={2} direction="row">
        <br />
      {/* <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button> */}
      <Button variant="outlined" type="submit">Outlined</Button>
    </Stack>
    </form>
  );
}

export default App



