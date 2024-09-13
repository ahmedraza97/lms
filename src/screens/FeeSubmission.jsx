import {
  Box,
  Button,
  FormControlLabel,
  FormLabel,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
} from "@mui/material";
import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import { db } from "../configue/FirebaseConfigue";
import { useNavigate } from "react-router-dom";

function FeeSubmission() {
  const [formData, setFormData] = useState({
    name: "",
    class: "",
    amount: "",
    paymethod: "",
  });
  let navigate = useNavigate();
  const handleSumbit = async (e) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(db, "submittedfee"), formData);
      console.log("Document written with ID: ", docRef.id);
      navigate("/fee-voucher");
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <Box sx={{ maxWidth: "70%", margin: "0 auto" }}>
      <form onSubmit={handleSumbit}>
        <Box sx={{ display: "flex", gap: 3, flexDirection: "column" }}>
          <Box>
            <label>Name</label>
            <TextField
              fullWidth
              type="text"
              placeholder="Enter your Name"
              value={formData.name}
              required
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
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
            <InputLabel id="demo-simple-select-label">
              Payment Method
            </InputLabel>
            <Select
              fullWidth
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={formData.paymethod}
              onChange={(e) =>
                setFormData({ ...formData, paymethod: e.target.value })
              }
            >
              <MenuItem value="credit card">Credit Card</MenuItem>
              <MenuItem value="debit card">Debit Card</MenuItem>
              <MenuItem value="easy paisa">Easy Paisa</MenuItem>
            </Select>
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

export default FeeSubmission;
