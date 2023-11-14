import React, { useState } from "react";
import { Box, Button, Card, CardContent, TextField, Typography } from "@mui/material";
import GoogleIcon from "./../../assets/google.svg";
import FacebookIcon from "./../../assets/facebook.svg";
// import { Link, Route, Router } from "react-router-dom";
// import { BrowserRouter as Router, Link, Route, BrowserRouter} from "react-router-dom";

// import SigninPage from "./../Signin/signin";

const SignupPage: React.FC = () => {
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
            <Typography sx={{ fontSize: 25, fontWeight: 700, display: 'flex' ,justifyContent: 'center' }} color="text.secondary" gutterBottom>
              Sign Up
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
              <Button style={{marginBottom: '10px'}} type="submit" variant="contained" color="primary" fullWidth>
                Sign Up
              </Button>
              <h4 style={{display: 'flex', justifyContent: 'center'}}>
                Already have an account?{" "}
                
                  <Button style={{fontWeight: 700}}>Sign In</Button>
               
              </h4>
              <h5 style={{display: 'flex', justifyContent: 'center', fontSize: 20}}>OR</h5>
              <div style={{display: 'flex', justifyContent: "center" }}>
                <img src={GoogleIcon} alt="Google Icon" width={50} style={{ margin: "0 10px", cursor:'pointer'}}/>
                <img src={FacebookIcon} alt="Facebook Icon" width={50} style={{ margin: "0 10px", cursor:'pointer'}}/>
              </div>
            </form>
          </CardContent>
        </Card>
      </Box>
      
  );
};

export default SignupPage;