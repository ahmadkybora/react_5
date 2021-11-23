import React from 'react';
import { Redirect, Route } from "react-router-dom";

export const ProtectedRouteUser = ({ component: Component, ...restOfProps }) => {
  const isAuthenticated = localStorage.getItem("token");
  const isAdmin = localStorage.getItem("token");
  console.log("this", isAuthenticated);

  return (
    <Route
      {...restOfProps}
      render={(props) =>
        ( isAuthenticated && isAdmin ) ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
}

//pathname: "/",
// state: {
//     prevLocation: path,
//     error: "You Need to login"
// }