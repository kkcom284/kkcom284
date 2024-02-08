import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./Login";
import SignUp from "./SignUp";
import Room from "./Room";

import AuthProvider from "./AuthService";
const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Room />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};
// <>
//   <Login />
//   <SignUp />
//   <Room />
// </>

export default App;
