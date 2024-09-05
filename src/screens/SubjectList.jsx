import { Box } from '@mui/material'
import React, { useState } from 'react'
import CustomTable from '../components/CustomTable'
import { collection, getDocs } from "firebase/firestore"; 

function SubjectList() {

  const columns = [
    { field: 'id', headerName: 'ID', width: 130},
    { field: 'subjectname', headerName: 'Subject', width: 130 },
    { field: 'class', headerName: 'Class', width: 130 },
    { field: 'group', headerName: 'Group', width: 130 },
  ];


  return (
    <Box>
      <CustomTable name="subjects" columns={columns}/>
    </Box>
  )
}

export default SubjectList