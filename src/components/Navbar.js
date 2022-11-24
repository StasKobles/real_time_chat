import { AppBar, Button, Grid, Toolbar } from "@mui/material";
import { signOut } from "firebase/auth";
import React, { useContext } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { NavLink } from "react-router-dom";
import { Context } from "..";
import "../App.css";
import { LOGIN_ROUTE } from "../utils/consts";

const Navbar = () => {
  const { auth } = useContext(Context);
  const [user] = useAuthState(auth);
  return (
    <AppBar color={"primary"} position="static">
      <Toolbar>
        <Grid container justifyContent={"flex-end"}>
          {user ? (
            <Button
              onClick={() => signOut(auth)}
              variant={"outlined"}
              color={"inherit"}
            >
              Exit
            </Button>
          ) : (
            <NavLink to={LOGIN_ROUTE}>
              <Button variant={"outlined"} color={"inherit"}>
                Login
              </Button>
            </NavLink>
          )}
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
