import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/styles";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  form: {
    margin: 20,
  },
  button: {
    padding: 16,
  },
}));

const Search = () => {
  const classes = useStyles();
  const [word, setWord] = useState<string>("");

  const searchWord = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWord(e.target.value);
  };

  const wordSubmit = () => {
    if (word === "") {
      console.log("該当なし");
    }
    setWord("");
  };

  const clear = () => {
    setWord("");
  };

  return (
    <Grid className={classes.form}>
      <TextField
        id="outlined-basic"
        label="何を調べる？"
        variant="outlined"
        onChange={searchWord}
      />
      <Button className={classes.button} onClick={() => wordSubmit()}>
        <SearchIcon />
      </Button>
      <Button className={classes.button} onClick={() => clear()}>
        クリア
      </Button>
    </Grid>
  );
};

export default Search;
