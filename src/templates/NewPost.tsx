import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Box, TextField, Typography } from "@material-ui/core";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      margin: 25,
    },
    box: {
      margin: 25,
    },
    input: {
      margin: 40,
    },
  })
);

interface InputText {
  url: string;
  title: string;
  contents: string;
  keyword: string;
  author: string;
}

const NewPost: React.FC = () => {
  const classes = useStyles();
  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputText>();

  const onSubmit: SubmitHandler<InputText> = (data) => {
    console.log(data);
  };

  return (
    <div>
      <Typography className={classes.title} variant="h4" gutterBottom>
        新規投稿
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box className={classes.box}>
          <Box mt={2} className={classes.input}>
            <TextField
              required
              variant="outlined"
              id="url"
              label="URL"
              style={{ width: 700 }}
              {...register("url", {
                required: "URLを入力してください",
              })}
              helperText={errors.url && errors.url.message}
            />
          </Box>
          <Box mt={2} className={classes.input}>
            <TextField
              required
              variant="outlined"
              id="title"
              label="タイトル"
              style={{ width: 700 }}
              {...register("title", {
                required: "タイトルを入力してください",
              })}
              helperText={errors.title && errors.title.message}
            />
          </Box>
          <Box mt={2} className={classes.input}>
            <TextField
              required
              id="contents"
              label="本文"
              multiline
              maxRows={10000}
              variant="outlined"
              style={{ width: 700 }}
              {...register("contents", {
                required: "本文を入力してください",
              })}
              helperText={errors.contents && errors.contents.message}
            />
          </Box>
          <Box mt={2} className={classes.input}>
            <TextField
              required
              variant="outlined"
              id="keyword"
              label="キーワード"
              style={{ width: 700 }}
              {...register("keyword", {
                required: "キーワードを入力してください",
              })}
              helperText={errors.keyword && errors.keyword.message}
            />
          </Box>
          <Box mt={2} className={classes.input}>
            <TextField
              required
              variant="outlined"
              id="author"
              label="作者名"
              style={{ width: 700 }}
              {...register("author", {
                required: "作者の入力をしてください",
              })}
              helperText={errors.author && errors.author.message}
            />
          </Box>
          <div>
            <Button
            // onClick={() => history.push("/complete")}
            >
              確認をする
            </Button>
          </div>
        </Box>
      </form>
    </div>
  );
};

export default NewPost;
