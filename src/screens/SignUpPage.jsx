import { Email } from '@mui/icons-material'
import { Box, Button, Paper, TextField, Typography } from '@mui/material'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { auth, db } from '../configue/FirebaseConfigue'
import { doc, setDoc } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'

function SignUpPage() {
  const [formData,setFormData] = useState({
    firstname:"",
    lastname:"",
    email:"",
    password:""

  });
  let navigate = useNavigate()
  const handleSubmit= async(e)=>{
    e.preventDefault()
    console.log(formData);

    await createUserWithEmailAndPassword(auth,formData.email,formData.password)
    .then(async(res)=>{
      console.log(res)
      const userid = res.user.uid
      await setDoc(doc(db,'users', userid),formData)
      .then((res)=>console.log(res))
      .catch((err)=>console.log(err));
      navigate("/login")

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
              <Typography variant='h5'>Create Account</Typography>
                <Box>
                    <TextField 
                    required
                    fullWidth
                    label="first Name"
                    type='text'
                    onChange={(e)=>setFormData({...formData,firstname:e.target.value})}
                    ></TextField>
                </Box>
                <Box>
                    <TextField 
                    required
                    fullWidth
                    label="last Name"
                    type='text'
                    onChange={(e)=>setFormData({...formData,lastname:e.target.value})}
                    ></TextField>
                </Box>
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
            </Paper>
        </form>
    </Box>
  )
}

export default SignUpPage