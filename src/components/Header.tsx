import React, { useEffect } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import SearchIcon from "@material-ui/icons/Search";
import { auth } from "../firebase/firebase";
import { selectUser, logout } from "../features/userSlice";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuBar: {
      backgroundColor: "tomato",
    },
    title: {
      flexGrow: 1,
    },
  })
);

const Header: React.FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector(selectUser);

  useEffect(() => {
    const unSub = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          uid: authUser.uid,
          username: authUser.displayName,
        });
      } else {
        dispatch(logout());
      }
    });
    return () => {
      unSub();
    };
  }, [dispatch]);

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.menuBar}>
        <Toolbar>
          <Typography
            variant="h6"
            className={classes.title}
            onClick={() => history.push("/")}
          >
            Post Search App
          </Typography>
          <IconButton color="inherit" aria-label="mypage">
            <Link to={"/mypage"}>
              <AccountCircleIcon />
            </Link>
          </IconButton>
          <IconButton color="inherit" aria-label="search">
            <Link to={"/search"}>
              <SearchIcon />
            </Link>
          </IconButton>
          {/* {user.uid ? `${user.username}さん` : <></>}
          <Button color="inherit" onClick={signInGoogle}>
            {user.uid ? "Logout" : "Login"}
          </Button> */}
          <Button color="inherit" onClick={() => history.push("/login")}>
            ログイン
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
