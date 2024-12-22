import React, { Children, createContext, useState } from "react";

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({
    email: "aburayhan.bpi@gmail.com",
    displayName: "Md Abu Rayhan",
  });
  const [loading, setLoading] = useState(true);
  const [themeToggle, setThemeToggle] = useState(false);

  const allInfo = {
    user,
    loading,
    setLoading,
    themeToggle,
    setThemeToggle,
  };

  return (
    <AuthContext.Provider value={allInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
