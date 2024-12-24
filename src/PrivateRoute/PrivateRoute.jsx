import React, { useState } from "react";
import useAuth from "../hooks/useAuth";
import Loader from "../components/Loader";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return <Loader></Loader>;
  }
  if (user && user?.email) {
    return children;
  }

  return (
    <div>
      <Navigate to="/login" state={location.pathname}></Navigate>
    </div>
  );
};

export default PrivateRoute;
