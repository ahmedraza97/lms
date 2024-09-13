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
function StudentForm() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastame: "",
    email: "",
    class: "",
    gender: "",
  });

  let navigate = useNavigate();
  const handleSumbit = async (e) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(db, "students"), formData);
      console.log("Document written with ID: ", docRef.id);
      navigate("/student-list");
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <Box sx={{ maxWidth: "70%", margin: "0 auto" }}>
      <form onSubmit={handleSumbit}>
        <Box sx={{ display: "flex", gap: 3, flexDirection: "column" }}>
          <Box>
            <label>First Name</label>
            <TextField
              fullWidth
              type="text"
              placeholder="firstName"
              value={formData.firstName}
              onChange={(e) =>
                setFormData({ ...formData, firstname: e.target.value })
              }
            />
          </Box>
          <Box>
            <label>Last Name</label>
            <TextField
              fullWidth
              type="text"
              placeholder="last tName"
              value={formData.lasrName}
              onChange={(e) =>
                setFormData({ ...formData, lastname: e.target.value })
              }
            />
          </Box>
          <Box>
            <label>email</label>
            <TextField
              fullWidth
              type="email"
              placeholder="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </Box>
          <Box>
            <label>Class</label>
            <TextField
              fullWidth
              type="number"
              placeholder="firstName"
              value={formData.class}
              onChange={(e) =>
                setFormData({ ...formData, class: e.target.value })
              }
            />
          </Box>
          <Box>
            <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              name="radio-buttons-group"
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
                onChange={(e) =>
                  setFormData({ ...formData, gender: e.target.value })
                }
              />
              <FormControlLabel
                value="male"
                control={<Radio />}
                label="Male"
                onChange={(e) =>
                  setFormData({ ...formData, gender: e.target.value })
                }
              />
            </RadioGroup>
          </Box>
          <Button
            type="sumbit"
            variant="contained"
            sx={{ px: 1, py: 1, background: "#fe9828" }}
          >
            Sumbit
          </Button>
        </Box>
      </form>
    </Box>
  );
}

export default StudentForm;
