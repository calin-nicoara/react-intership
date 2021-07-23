import React from "react";

const AuthContext = React.createContext({
  isLoggedIn: false,
  logOut: () => {}
});

export default AuthContext;