import { Box, Button, Paper, Typography } from '@mui/material'
import { collection, getDocs } from 'firebase/firestore';
import React, { useState } from 'react'
import { db } from '../configue/FirebaseConfigue';

function FeeVoucher() {
    const [feeData,setFeeData] = useState([]);
    const getData= async ()=> {
        const arr = []
      
    
        const querySnapshot = await getDocs(collection(db, "fee"));
        querySnapshot.forEach((doc) => {
         arr.push({...doc.data(),id:doc.id})
        });
        setFeeData(reverse);
      }
  
      React.useEffect(()=>{
        getData()
      },[]);
  return (
    <Box>
    <Typography sx={{fontSize:"24px",textAlign:"center"}}>Fee Structure</Typography>

        <Box sx={{maxWidth:"700px",margin:"20px auto"}}>
            {
                feeData.map((val,index)=>{
                    return (
                        <Paper elevation={5} sx={{paddingX:2,paddingY:1,mb:3}} key={val.id}>
                        <Typography sx={{textAlign:"center",fontSize:"17px"}}> Fee-voucher -Class {val.class}</Typography>
        
                        <Box sx={{display:"flex",justifyContent:"space-between"}}>
                        <Typography sx={{textAlign:"center",fontSize:"20px"}}>Class</Typography>
                        <Typography sx={{textAlign:"center",fontSize:"20px"}}>Class:{val.class}</Typography>
                        </Box>

                        <Box sx={{display:"flex",justifyContent:"space-between",mt:2}}>
                        <Typography sx={{textAlign:"center",fontSize:"20px"}}>Montly fee</Typography>
                        <Typography sx={{textAlign:"center",fontSize:"20px"}}>Rs:{val.monthlyfee}</Typography>
                        </Box>
        
                        <Box sx={{display:"flex",justifyContent:"space-between",mt:2}}>
                        <Typography sx={{textAlign:"center",fontSize:"20px"}}>Yearly  fee</Typography>
                        <Typography sx={{textAlign:"center",fontSize:"20px"}}>Rs:{val.yearlyfee}</Typography>
                        </Box>

                        <Box sx={{display:"flex",justifyContent:"center",my:2}}>
                         <Button variant='contained'>Pay now</Button>
                        </Box>

                        
                    </Paper>
                    )
                })
            }
        </Box>
    </Box>
  )
}

export default FeeVoucher