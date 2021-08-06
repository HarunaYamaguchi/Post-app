import React from "react";
import { Typography } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
// import { auth } from "../firebase/firebase";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: 30,
    },
    title: {
      flexGrow: 1,
    },
  })
);

const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h1" gutterBottom>
        Welcome!
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        あなたの学習をアウトプットしましょう！
      </Typography>
    </div>
  );
};

export default Home;
