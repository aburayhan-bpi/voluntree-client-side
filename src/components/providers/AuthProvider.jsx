import React, { Children, createContext, useState } from "react";

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({
    email: "srshihab2233@gmail.com",
    displayName: "Shihab",
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
