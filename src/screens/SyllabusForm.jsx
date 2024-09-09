import {
  Box,
  Button,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import { db } from "../configue/FirebaseConfigue";
import { useNavigate } from "react-router-dom";

function SyllabusForm() {
  const [formData, setFormData] = useState({
    subjectname: "",
    class: "",
    file: "",
  });
  const fileHandler = (e)=>{
    const file = e.target.files[0]
    const urlLink = URL.createObjectURL(file);
    setFormData({...formData,file:urlLink}) ;
    console.log(formData)
  }
  let navigate = useNavigate()
  const handleSumbit = async (e)=>{
    e.preventDefault()
    try {
      const docRef = await addDoc(collection(db, "syllabus"),formData);
      console.log("Document written with ID: ", docRef.id);
      navigate("syllabus-list");

    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  return (
    <Box sx={{ maxWidth: "70%", margin: "0 auto" }}>
      <form onSubmit={handleSumbit}>
        <Box sx={{display:"flex",gap:3,flexDirection:"column"}}>
        <Box>
          <label>Subject Name</label>
          <TextField
            fullWidth
            type="text"
            placeholder="Enter your Subject"
            value={formData.subjectname}
            required
            onChange={(e) =>
              setFormData({ ...formData, subjectname: e.target.value })
            }
          />
        </Box>

        <Box>
          <label>Class</label>
          <TextField
            fullWidth
            type="number"
            placeholder="Enter your Class"
            value={formData.class}
            // required
            onChange={(e)=>setFormData({...formData,class:e.target.value})}
          />
        </Box>
        <Box sx={{color:"white"}}>
          <label htmlFor="uploadfile" style={{width:"100%",backgroundColor:"rgb(25, 118, 210)",display:"inline-block",paddingBottom:5,paddingTop:5,textAlign:"center",cursor:"pointer"}} >Upload file</label>
          <TextField
            fullWidth
            type="file"
            placeholder="Enter your Class"
            required
            sx={{display:"none"}}
            id="uploadfile"
            onChange={fileHandler}
          />
        </Box>


        <Button type="sumbit" variant="contained">Sumbit</Button>
      </Box>  
      </form>
    </Box>
  );
}

export default SyllabusForm;
