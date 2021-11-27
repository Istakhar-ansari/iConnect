import React, { useState } from "react";
import axios from "axios";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Login = () => {
  const [name, setName] = useState("");

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (e) => {
    console.log("Submitted Name is ", name);
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const payload = {
        username: data.get('user'),
    }
    axios
      .post("http://13.233.73.170:3000/user", payload)
      .then((response) => {
        let { data } = response;
        console.log("User Login ", data);
        const {
          admin,
          data: { _id: id, username },
        } = data;

        localStorage.setItem('teacherAuth',JSON.stringify({
            admin,
            id,
            username
        }));
        window.location.reload(false)
      });
  };

  return (
    // <>
    //     <form onSubmit={handleSubmit}>
    //         <label> Username
    //             <input type="text" name="username" value={name} onChange={handleChange}/>
    //         </label>
    //         <input type="submit" value="Submit" />
    //     </form>
    // </>

    <>
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="user"
            autoComplete="user"
            autoFocus
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Login;
