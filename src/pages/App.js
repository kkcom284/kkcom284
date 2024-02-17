import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Room from "./Room";
import LoggedInRoute from "./LoggedInRoute";
import AuthProvider from "./AuthService";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route element={<LoggedInRoute />}>
            <Route path="/" element={<Room />} />
          </Route>
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
