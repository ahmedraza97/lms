import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../configue/FirebaseConfigue';





const paginationModel = { page: 0, pageSize: 5 };

export default function CustomTable({name,columns}) {
    const[rowData,setRowData]= React.useState([]);


    const getData= async ()=> {
      const arr = []
    
  
      const querySnapshot = await getDocs(collection(db, name));
      querySnapshot.forEach((doc) => {
       arr.push({...doc.data(),id:doc.id})
      });
      setRowData(arr);
      // console.log(rowData);
    }

    React.useEffect(()=>{
      getData()
    },[]);
  return (
    <Paper sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rowData}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        sx={{ border: 0 }}
      />
    </Paper>
  );
}
