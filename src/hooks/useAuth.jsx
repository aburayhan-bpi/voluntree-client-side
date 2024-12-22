import React, { useContext } from "react";
import { AuthContext } from "../components/providers/AuthProvider";

const useAuth = () => {
  const context = useContext(AuthContext);

  return context;
};

export default useAuth;
