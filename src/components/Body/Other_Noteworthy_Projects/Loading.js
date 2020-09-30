import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > * + *": {},
    margin: "auto",
  },
}));

const Loading = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CircularProgress color="primary" />
    </div>
  );
};

export default Loading;
