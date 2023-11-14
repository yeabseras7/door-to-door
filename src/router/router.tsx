import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import SignupPage from "../Pages/Signup/signup";
import SigninPage from "../Pages/Signin/signin";
import HomePage from "../Pages/Home/home";

export const router = createBrowserRouter([{
    path: '/',
    element: <App/>,
    children: [
        {path: '', element: <HomePage/>},
        {path: 'signup', element: <SignupPage/>},
        {path: 'signin', element: <SigninPage/>},
        // {path: '', element: <SignupPage/>},
    ]
}])