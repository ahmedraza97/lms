import { Box } from '@mui/material'
import React, { useState } from 'react'
import CustomTable from '../components/CustomTable'
import { collection, getDocs } from "firebase/firestore"; 

function TeacherList() {

  const columns = [
    { field: 'id', headerName: 'ID', width: 130},
    { field: 'firstname', headerName: 'First name', width: 130 },
    { field: 'lastname', headerName: 'Last name', width: 130 },
    { field: 'email', headerName: 'email', width: 130 },
    { field: 'class', headerName: 'Class', width: 130 },
    { field: 'gender', headerName: 'Gender', width: 130 },
  ];


  return (
    <Box>
      <CustomTable name="teachers" columns={columns}/>
    </Box>
  )
}

export default TeacherList