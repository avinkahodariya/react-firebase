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
import { register } from "./config";
// import firebaseConfig from "../config";
import { db } from "./config";
import { MuiPhoneInput, MuiPhoneNumber } from "material-ui-phone-number";

const Registration = () => {
  const [Username, setUsername] = useState(null);
  const [Password, setPassword] = useState(null);
  const [Email, setEmail] = useState(null);
  const [Mobile, setMobile] = useState(null);

  const [Conf_Password, setConf_Password] = useState(null);
  const history = useHistory();
  const Redirect = () => {
    console.log("rege");
    <Redirect to="/signin/" />;
    history.push("/");
  };

  // const Register = () => {
  //   if (Password == Conf_Password) {
  //     register({ Email, Password });
  //   }
  // };

  const handleSubmit = async (e) => {
    // console.log("e", e);
    let b = await db
      .collection("users")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          // console.log(doc.data());
        });
      });
    // console.log(b);
    var res;
    e.preventDefault();
    let a = await register(Username, Email, Password, Mobile).then((el) => {
      // console.log(el);
      res = el;
      // console.log("res", res);
    });
  };

  return (
    <>
      <Container maxWidth="l">
        <Box
          display="flex"
          flexDirection="column"
          width="50%"
          margin="0 auto"
          className={styles.root}
        >
          {/* <MuiPhoneInput
            localization={{ Germany: "Deutschland", Spain: "España" }}
          /> */}
          <AccountCircleIcon />{" "}
          <TextField
            required
            id="standard-required"
            label="Username"
            defaultValue=""
            variant="outlined"
            value={Username}
            className={styles.MuiTextField}
            onChange={(e) => {
              console.log("df", e.target.value);
              setUsername(e.target.value);
            }}
          />
          <EmailIcon></EmailIcon>{" "}
          <TextField
            required
            id="standard-required"
            label="Email"
            type="email"
            label="Email"
            variant="outlined"
            className={styles.MuiTextField}
            value={Email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <TextField
            id="standard-required"
            label="Mobile"
            type="tel"
            variant="outlined"
            inputProps={{ maxLength: 10 }} // sets the maximum length to 10
            className={styles.MuiTextField}
            value={Mobile}
            onChange={(e) => {
              setMobile(e.target.value);
            }}
          />{" "}
          <LockIcon />{" "}
          <TextField
            required
            id="standard-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            variant="outlined"
            value={Password}
            className={styles.MuiTextField}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <TextField
            required
            id="standard-password-input"
            label="Confirm-Password"
            type="password"
            autoComplete="current-password"
            variant="outlined"
            className={styles.MuiTextField}
            value={Conf_Password}
            onChange={(e) => {
              setConf_Password(e.target.value);
            }}
          />{" "}
          <Button
            variant="contained"
            color="white"
            className={styles.button}
            onClick={handleSubmit}
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
