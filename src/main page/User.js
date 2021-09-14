import React, { useState, useEffect } from "react";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import Paper from "@material-ui/core/Paper";
import styles from "../css.module.css";
import { StylesContext } from "@material-ui/styles";
import { connect } from "react-redux";
import { db } from "../config";

const User = (props) => {
  const [User_info, setUser_info] = useState({});

  useEffect(async () => {
    console.log("asdf fdef asdfghj", props.User);
    if ((props.User.name = undefined || props.User.name == "***")) {
      console.log("asdf drg asdfghj");

      await db
        .collection("users")
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            console.log(doc.data());
            props.User_data(doc.data());
            setUser_info(props.User);
            console.log("2nd time set", props.User);
          });
        });
    }
    // setUser_info(props.User);
  }, []);
  const [User, setUser] = useState();
  return (
    <div className={styles.Uer_info}>
      <Paper elevation={3} className={styles.User_info}></Paper>
    </div>
  );
};

const mapstateToprops = (state) => {
  console.log("state", state, state.User);
  return {
    User: state.User,
  };
};

const mapDispatchToprops = (dispatch) => {
  return {
    User_data: (payload) => {
      dispatch({
        type: "User_data",
        payload,
      });
    },
  };
};

export default connect(mapstateToprops, mapDispatchToprops)(User);
