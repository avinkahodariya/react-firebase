import React from "react";
import { useState } from "react";
import { Input } from "@material-ui/core";
import EmailIcon from "@material-ui/icons/Email";
import TextField from "@material-ui/core/TextField";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import LockIcon from "@material-ui/icons/Lock";
import { flexbox } from "@material-ui/system";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import styles from "./css.module.css";
import Icon from "@material-ui/core/Icon";
import Button from "@material-ui/core/Button";
import { Container } from "@material-ui/core";
import { Redirect } from "react-router";
import { useHistory } from "react-router";
// import { login } from "./Auth";
import { login } from "./config";

const Login = () => {
  const history = useHistory();
  const [Email, setEmail] = useState(null);
  const [Password, setPassword] = useState(null);
  // const handleSubmit = () => {
  //   var a = login({ Email, Password });
  //   console.log(a);
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let a = await login(Email, Password);

    console.log(a);

    if (a !== undefined) {
      history.push("/main");
    }
  };

  const gotosignin = () => {
    console.log("rege");
    history.push("/sigin");
  };

  return (
    <>
      <Container maxWidth="l">
        <Box
          display="flex"
          flexDirection="column"
          width="40%"
          margin="0 auto"
          className={styles.root}
        >
          <EmailIcon></EmailIcon>{" "}
          <TextField
            required
            id="standard-required"
            label="Email"
            type="email"
            label="Email"
            variant="outlined"
            className={styles.MuiTextField}
            onChange={(e) => {
              console.log("df", e.target.value);
              setEmail(e.target.value);
            }}
          />
          <LockIcon />{" "}
          <TextField
            required
            id="standard-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            variant="outlined"
            className={styles.MuiTextField}
            onChange={(e) => {
              console.log("df", e.target.value);
              setPassword(e.target.value);
            }}
          />
          <Button
            variant="contained"
            color="primary"
            className={styles.button}
            onClick={handleSubmit}
          >
            Login{" "}
          </Button>
          <Button
            variant="contained"
            color="primary"
            className={styles.button}
            onClick={gotosignin}
          >
            signin{" "}
          </Button>
        </Box>
      </Container>
    </>
  );
};

export default Login;
