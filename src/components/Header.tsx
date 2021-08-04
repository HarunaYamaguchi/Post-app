import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
    },
  })
);

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            BLOG
          </Typography>
          <IconButton color="inherit" aria-label="account">
            <AccountCircleIcon />
          </IconButton>
          <IconButton color="inherit" aria-label="account">
            <SearchIcon />
          </IconButton>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
