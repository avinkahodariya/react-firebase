import React, { useState } from "react";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import Paper from "@material-ui/core/Paper";

const User = () => {
  const [User, setUser] = useState();
  return (
    <>
      <Paper elevation={0} />
      <Paper />
      <Paper elevation={3} />
      <AccountCircleIcon />{" "}
    </>
  );
};

export default User;
