import React from 'react';
import { Navigate } from "react-router-dom";

function ProtectedRoute ({ component: Component, ...props }) {

  return (
    props.isAuthorized ? <Component {...props} /> : <Navigate to="/" replace />
  )
}

export default ProtectedRoute;
