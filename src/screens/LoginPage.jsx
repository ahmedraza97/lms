import { Email } from '@mui/icons-material'
import { Box, Button, Paper, TextField, Typography } from '@mui/material'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { auth, db } from '../configue/FirebaseConfigue'
import { doc, getDoc, setDoc } from 'firebase/firestore'
import { NavLink, useNavigate } from 'react-router-dom'

function LoginPage() {
  const [formData,setFormData] = useState({
    email:"",
    password:""
  });
  const [userData,useData] = useState("");
  let navigate = useNavigate()
  const handleSubmit= async(e)=>{
    e.preventDefault()
    console.log(formData);

    await signInWithEmailAndPassword(auth,formData.email,formData.password)
    .then(async(res)=>{
      console.log(res)
      const userid = res.user.uid
      await getDoc(doc(db,'users', userid))
      .then((res)=>{
        localStorage.setItem("userId",userid);
        navigate("/student-list")
      })
      .catch((err)=>console.log(err));
    })
    .catch((err)=>
    {
      console.log(err)
    }
    )
  }
   

  return (
    <Box>
        <form onSubmit={handleSubmit}>
            <Paper sx={{maxWidth:"500px" ,m:"100px auto",display:'flex',flexDirection:"column",gap:2,px:2,py:2}}>
              <Typography variant='h5'>Sign in </Typography>
  
                <Box>
                    <TextField 
                    required
                    fullWidth
                    label="Email"
                    type='email'
                    onChange={(e)=>setFormData({...formData,email:e.target.value})}
                    ></TextField>
                </Box>
                <Box>
                    <TextField 
                    required
                    fullWidth
                    label="Password"
                    type='password'
                    onChange={(e)=>setFormData({...formData,password:e.target.value})}
                    ></TextField>
                </Box>
                <Button type='submit' variant='contained' >Sign up</Button>
                <Typography>Don't have an account <NavLink to="/signup" className="link">signup</NavLink></Typography>
            </Paper>
        </form>
    </Box>
  )
}

export default LoginPage