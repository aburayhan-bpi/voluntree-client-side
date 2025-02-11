import React, { createContext, useEffect, useState } from "react";
import auth from "../../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import axios from "axios";

export const AuthContext = createContext();
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  // const [user, setUser] = useState({
  //   email: "aburayhan.bpi@gmail.com",
  //   displayName: "Md Abu Rayhan",
  // });
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [themeToggle, setThemeToggle] = useState(false);

  // Create or Register New User
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Create user with Google
  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // Update user info while register
  const updateUserProfile = (currentUserData) => {
    setLoading(true);
    return updateProfile(auth.currentUser, currentUserData);
  };

  // Login user with email and password
  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // sign out user
  const signOutUser = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      // console.log(currentUser);
      // console.log(currentUser?.email);
      if (currentUser?.email) {
        const user = { user: currentUser?.email };
        axios
          .post("https://voluntree-server-side.vercel.app/jwt", user, {
            withCredentials: true,
          })
          .then((res) => {
            // console.log("user login:", res.data);
            setLoading(false);
          });
      } else {
        axios
          .post(
            "https://voluntree-server-side.vercel.app/logout",
            {},
            { withCredentials: true }
          )
          .then((res) => {
            // console.log("user logged out: ", res.data);
            setLoading(false);
          });
      }

      return () => unSubscribe();
    });
  }, [user?.email]);

  const allInfo = {
    user,
    loading,
    setLoading,
    themeToggle,
    setThemeToggle,
    createUser,
    updateUserProfile,
    loginUser,
    googleLogin,
    signOutUser,
  };

  return (
    <AuthContext.Provider value={allInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
