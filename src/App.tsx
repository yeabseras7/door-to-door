import React from "react";
import NavBar from "./components/NavBar/navbar";
import "./App.css";
// import SignupPage from "./Pages/Signup/signup";
import { Outlet } from "react-router";

const App: React.FC = () => {
  return (
    <>
      <NavBar/> 
      <Outlet/>
   </>
  );
};

export default App;