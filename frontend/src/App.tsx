import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import HomePage from './screens/HomePage';
import './App.css';
import SigninPage from './screens/Signin/SigninPage'
import SignupPage from './screens/Signup/SignupPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="signin" element={<SigninPage />} />
      <Route path="signup" element={<SignupPage />} />
      </Routes>
    </BrowserRouter>

   
  );
}

export default App;
