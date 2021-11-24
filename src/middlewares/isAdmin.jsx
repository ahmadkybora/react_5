import React from 'react';
import { Redirect, Route } from "react-router-dom";

export const ProtectedRouteAdmin = ({ component: Component, ...restOfProps }) => {
  const isAuthenticated = localStorage.getItem("token");
  const isAdmin = localStorage.getItem("isAdmin");

  return (
    <Route
      {...restOfProps}
      render={(props) =>
        ( isAuthenticated && ( isAdmin === "true" ) ) ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
}
