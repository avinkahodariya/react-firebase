import React from "react";
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
const Login = () => {
  const history = useHistory();
  const Redirect = () => {
    console.log("rege");
    <Redirect to="/signin/" />;
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
          />
          <LockIcon />{" "}
          <TextField
            required
            id="standard-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            variant="outlined"
          />
          <Button variant="contained" color="primary" className={styles.button}>
            Login{" "}
          </Button>
          <Button
            variant="contained"
            color="primary"
            className={styles.button}
            onClick={Redirect}
          >
            signin{" "}
          </Button>
        </Box>
      </Container>
    </>
  );
};

export default Login;
