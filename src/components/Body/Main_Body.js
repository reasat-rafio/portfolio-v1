import React from "react";
import Impression from "./Impression/Impression";
import { Grid } from "@material-ui/core";

const Main_Body = () => {
  return (
    <Grid container className="main_body">
      <Grid item sm={0} md={2} className="left_grid" />
      <Grid item sm={12} md={8} className="content">
        <Impression />
      </Grid>
      <Grid item sm={0} md={2} className="right_grid" />
    </Grid>
  );
};

export default Main_Body;
