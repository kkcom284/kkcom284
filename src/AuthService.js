import React, { useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./config/firebase";

const AuthProvider = () => {
  const [user, setUser] = useState(null);
  onAuthStateChanged(auth, (user) => {
    setUser(user);
  });
};
