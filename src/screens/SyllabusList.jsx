import { Box } from '@mui/material';
import React from 'react'
import CustomTable from '../components/CustomTable';

function SyllabusList() {
  const columns = [
    { field: 'id', headerName: 'ID', width: 130},
    { field: 'subjectname', headerName: 'Subject', width: 130 },
    { field: 'class', headerName: 'Class', width: 130 },
    { field: 'file', headerName: 'File', width: 130 ,
      renderCell: (params) => (
        <div >
        <a
          href={params.row.file}
          download={true}
          style={{padding:1,color:"blue"}}
        >
          Download
        </a>
        </div>
      ),

    },
  ];
  return ( 
    <Box>
      <CustomTable name="syllabus" columns={columns}/>
    </Box>
   )
}

export default SyllabusList