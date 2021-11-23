import React from 'react';
import { Redirect, Route } from "react-router-dom";

export const LogoutRoute = ({ component: Component, ...restOfProps }) => {
  const isAuthenticated = localStorage.getItem("token");

  return (
    <Route
      {...restOfProps}
      render={(props) =>
        isAuthenticated ? <Redirect to="/" /> : <Component {...props} />
      }
    />
  );
}
