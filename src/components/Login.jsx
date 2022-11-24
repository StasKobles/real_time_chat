import { Button, Grid } from "@mui/material";
import { Box, Container } from "@mui/system";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import React, { useContext } from "react";
import { Context } from "..";
import "../App.css";
const Login = () => {
  const { auth } = useContext(Context);

  const login = async () => {
    // Sign in using a popup.
    const provider = new GoogleAuthProvider();
    provider.addScope("profile");
    provider.addScope("email");
    // eslint-disable-next-line no-unused-vars
    const result = await signInWithPopup(auth, provider);
  };
  return (
    <Container>
      <Grid
        container
        className={"loginGrid"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Grid
          container
          alignContent={"center"}
          direction={"column"}
          className={"loginForm"}
          width={400}
        >
          <Box p={5}>
            <Button onClick={login} variant={"outlined"}>
              Login by Google account
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
