import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";

const Loader = () => {
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
          width={400}
        >
          <div className="lds-facebook">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Loader;
