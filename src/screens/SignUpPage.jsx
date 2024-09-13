import { Email } from "@mui/icons-material";
import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth, db } from "../configue/FirebaseConfigue";
import { doc, setDoc } from "firebase/firestore";
import { NavLink, useNavigate } from "react-router-dom";

function SignUpPage() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });
  let navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    await createUserWithEmailAndPassword(
      auth,
      formData.email,
      formData.password
    )
      .then(async (res) => {
        console.log(res);
        const userid = res.user.uid;
        await setDoc(doc(db, "users", userid), formData)
          .then((res) => console.log(res))
          .catch((err) => console.log(err));
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Box>
      <form
        onSubmit={handleSubmit}
        style={{
          height: "100vh",
          display: "grid",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Paper
          sx={{
            maxWidth: "500px",
            minWidth: "450px",
            m: "100px auto",
            display: "flex",
            flexDirection: "column",
            gap: 2,
            px: 3,
            py: 3,
            border: "1px solid #cdc3c3",
          }}
        >
          <Typography
            variant="h5"
            sx={{ textAlign: "center", color: "#fe9828", fontWeight: "800" }}
          >
            Create Account
          </Typography>
          <Box>
            <TextField
              required
              fullWidth
              label="first Name"
              type="text"
              onChange={(e) =>
                setFormData({ ...formData, firstname: e.target.value })
              }
            ></TextField>
          </Box>
          <Box>
            <TextField
              required
              fullWidth
              label="last Name"
              type="text"
              onChange={(e) =>
                setFormData({ ...formData, lastname: e.target.value })
              }
            ></TextField>
          </Box>
          <Box>
            <TextField
              required
              fullWidth
              label="Email"
              type="email"
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            ></TextField>
          </Box>
          <Box>
            <TextField
              required
              fullWidth
              label="Password"
              type="password"
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            ></TextField>
          </Box>
          <Button
            type="submit"
            variant="contained"
            sx={{ px: 1, py: 1, background: "#fe9828" }}
          >
            Sign up
          </Button>
          <Typography sx={{ textAlign: "center" }}>
            Already have an account{" "}
            <NavLink to="/" className="link">
              Login
            </NavLink>
          </Typography>
        </Paper>
      </form>
    </Box>
  );
}

export default SignUpPage;
