import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext"
import PrivateTexts from "./PrivateTexts";
import PublicPage from "./PublicPage";

const PrivateRoute = ({ texts }) => {
  const { currentUser } = useAuth()
  return (
    <Route
      render={() =>
        !!currentUser ? (
          <PrivateTexts texts={texts} />
        ) : (
          <Redirect to={"/login"} />
        )
      }
    />
  );
};
export default PrivateRoute