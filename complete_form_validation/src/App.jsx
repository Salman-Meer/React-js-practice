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
  const [error,setError]=useState({})
function form_validation(e) {
  e.preventDefault();

  let newErrors = {};

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    console.log("email error");
    newErrors.email = "Invalid email";
  }

  if (!/^[A-Za-z ]*$/.test(name)) {
    console.log("name error");
    newErrors.name = "Invalid name";
  }

  if (!/^(?=.*[A-Za-z])(?=.*\d).{6,}$/.test(password)) {
    console.log("password error");
    newErrors.password =
      "Password must be 6+ chars with letters and numbers";
  }

  setError(newErrors);

  console.log("button clicked");
  console.log("FINAL ERROR OBJECT:", newErrors);
}
   return (
    <form onSubmit={form_validation}>
   
      Name: <TextField id="standard-basic" value={name} label="write your name" name="name" variant="standard" 
      onChange={(e) => {
  setName(e.target.value);
}} />
{error.name && (
  <p style={{ color: "red" }}>{error.name}</p>
)}
      <br />
     Email: <TextField type="email" id="outlined-basic" value={email} label="write your email" name="email" variant="outlined" 
     onChange={(e) => {
  setEmail(e.target.value);
}} />
{error.email && (
  <p style={{ color: "red" }}>{error.email}</p>
)}
     <br />
      Passoword:<TextField type="password" id="filled-basic" label="Enter password" name="password" variant="filled"
      onChange={(e) => {
  setPassword(e.target.value);
}} />
{error.password && (
  <p style={{ color: "red" }}>{error.password}</p>
)}
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



