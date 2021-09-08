import React, { useState } from "react";
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
import { useHistory } from "react-router";
import { register } from "./Auth";

const Registration = () => {
  const [Username, setUsername] = useState(null);
  const [Password, setPassword] = useState(null);
  const [Email, setEmail] = useState(null);
  const [Conf_Password, setConf_Password] = useState(null);
  const history = useHistory();
  const Redirect = () => {
    console.log("rege");
    <Redirect to="/signin/" />;
    history.push("/");
  };

  const Register = () => {
    register({ Username, Email, Password });
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
          <AccountCircleIcon />{" "}
          <TextField
            required
            id="standard-required"
            label="Username"
            defaultValue=""
            variant="outlined"
          />
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
          <TextField
            required
            id="standard-password-input"
            label="Confirm-Password"
            type="password"
            autoComplete="current-password"
            variant="outlined"
          />{" "}
          <Button
            variant="contained"
            color="white"
            className={styles.button}
            onClick={Register}
          >
            Submit{" "}
          </Button>{" "}
          <Button
            variant="contained"
            color="white"
            className={styles.button}
            onClick={Redirect}
          >
            Login{" "}
          </Button>
        </Box>
      </Container>
    </>
  );
};

export default Registration;
