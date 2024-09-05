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

function SubjectForm() {
  const [formData, setFormData] = useState({
    subjectname: "",
    class: "",
    group: "",
  });
  let navigate = useNavigate()
  const handleSumbit = async (e)=>{
    e.preventDefault()
    try {
      const docRef = await addDoc(collection(db, "subjects"),formData);
      console.log("Document written with ID: ", docRef.id);
      navigate("/subjects-list");

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
            required
            onChange={(e) =>
              setFormData({ ...formData, class: e.target.value })
            
            }
          />
        </Box>

        <Box>
          <FormLabel  id="demo-radio-buttons-group-label">Select Group</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            name="radio-buttons-group"
          >
            <FormControlLabel
              value="General-Science"
              control={<Radio />}
              label="General-Science"
              onChange={(e) =>
                setFormData({ ...formData, group: e.target.value })
              }
            />
            <FormControlLabel
              value="Pre-Medical"
              control={<Radio />}
              label="Pre-Medical"
              onChange={(e) =>
                setFormData({ ...formData, group: e.target.value })
              }
            />
          </RadioGroup>
        </Box>
        <Button type="sumbit" variant="contained">Sumbit</Button>
      </Box>  
      </form>
    </Box>
  );
}

export default SubjectForm;
