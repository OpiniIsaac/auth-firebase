import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import React, { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export default function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true)
  function signIn(email, password) {
    signInWithEmailAndPassword(auth, email, password)
          .catch((error) => {
        console.log(error.message);
      });
  }

  function signUp( email,password) {
    createUserWithEmailAndPassword(auth,email,password)
   
  }

  function resetPassword() {
    // Implement reset password functionality
  }
  function logout() {
   signOut(auth)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const value = {
    currentUser,
    signIn,
    resetPassword,
    signUp,
    logout
  };
  if (loading) {
    return <div>Loading...</div>;
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
