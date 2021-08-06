import React from "react";
import { Typography } from "@material-ui/core";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import PostAddIcon from "@material-ui/icons/PostAdd";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import Divider from "@material-ui/core/Divider";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
    title: {
      margin: 25,
    },
  })
);

const MyPage: React.FC = () => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <div>
      <Typography className={classes.title} variant="h4" gutterBottom>
        マイページ
      </Typography>
      <List className={classes.root}>
        <ListItem onClick={() => history.push("/account")}>
          <ListItemAvatar>
            <Avatar>
              <AccountCircleOutlinedIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="アカウント設定" />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem onClick={() => history.push("/newpost")}>
          <ListItemAvatar>
            <Avatar>
              <PostAddIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="新規投稿" />
        </ListItem>
        <Divider variant="inset" component="li" />
      </List>
    </div>
  );
};

export default MyPage;
