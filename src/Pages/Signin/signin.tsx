import React, { useState } from "react";
import { Box, Button, Card, CardContent, TextField, Typography } from "@mui/material";
// import ReactComponent from "./../../../assets/google.svg";
// import SvgIcon from "./../../../assets/facebook.svg";


const SigninPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle signup logic here
    console.log("Signup form submitted");
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="start" margin="100px" height="100vh">
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Sign In
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Email"
              type="email"
              value={email}
              onChange={handleEmailChange}
              margin="normal"
              variant="outlined"
              fullWidth
            />
            <TextField
              label="Password"
              type="password"
              value={password}
              onChange={handlePasswordChange}
              margin="normal"
              variant="outlined"
              fullWidth
              sx={{marginBottom: '50px'}}
            />
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Sign Up
            </Button>

            <h5 style={{display: 'flex', justifyContent: 'center'}}>OR</h5>

            {/* <div>
              <ReactComponent/>
              <SvgIcon/>
            </div> */}
          </form>
        </CardContent>
      </Card>
    </Box>
  );
};

export default SigninPage;