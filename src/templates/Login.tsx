import React from "react";
// import { useDispatch } from "react-redux";
// import { useHistory } from "react-router";
import { useForm, SubmitHandler } from "react-hook-form";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
// import Link from "@material-ui/core/Link";
// import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

// import { auth, provider } from "../firebase/firebase";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

interface InputLogin {
  email: string;
  password: string;
}

const Login = () => {
  const classes = useStyles();
  // const dispatch = useDispatch();
  // const history = useHistory();
  // const handlePage = (path) => history.push(path);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputLogin>();

  const onSubmit: SubmitHandler<InputLogin> = (data) => {
    console.log(data);
  };

  // const signInGoogle = async () => {
  //   await auth
  //     .signInWithRedirect(provider)
  //     .catch((error) => alert(error.message));
  // };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          ログイン
        </Typography>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className={classes.form}
          noValidate
        >
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            label="メールアドレス"
            type="text"
            id="email"
            {...register("email", {
              required: "メールアドレスが入力されていません",
              pattern: {
                value:
                  /^[a-zA-Z0-9_.+-]+@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/,
                message: "メールアドレスを正しく入力してください",
              },
            })}
            helperText={errors.email && errors.email.message}
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            label="パスワード"
            type="password"
            id="password"
            {...register("password", {
              required: "パスワードが入力されていません",
              minLength: {
                value: 6,
                message: "6文字以上で入力してください",
              },
            })}
            helperText={errors.password && errors.password.message}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            // onClick={() => history.push("/")}
          >
            ログイン
          </Button>
          {/* <Grid container>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid> */}
        </form>
      </div>
      <Box mt={8}></Box>
    </Container>
  );
};

export default Login;
