import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@material-ui/core";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div>
      <Button
        variant="contained"
        onClick={() => {
          console.log("LoginButton Clicked");
          loginWithRedirect();
        }}
      >
        Log In
      </Button>
    </div>
  );
};

export default LoginButton;
