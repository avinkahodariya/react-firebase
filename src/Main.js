import React, { useState, useEffect } from "react";
import { db } from "./config";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import { makeStyles } from "@material-ui/core/styles";
import { Avatar } from "@material-ui/core";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/icons/Mail";
import FlightIcon from "@material-ui/icons/Flight";
import InfoIcon from "@material-ui/icons/Info";
import { useHistory } from "react-router";
import { connect } from "react-redux";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: "auto",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));
const Main = (props) => {
  const history = useHistory();
  const classes = useStyles();

  const [User, setUser] = useState(null);
  // console.log("b is ", b);
  let c;
  // useEffect(async (c) => {
  //   c = await db
  //     .collection("users")
  //     .get()
  //     .then((querySnapshot) => {
  //       querySnapshot.forEach((doc) => {
  //         //   console.log(doc.data());
  //         setb(doc.data());
  //       });
  //     });
  // }, []);

  useEffect(() => {
    setUser(props.User_data);
  }, []);

  return (
    <>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            Welcome to Flight Routing
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <PermIdentityIcon src="/broken-image.jpg" />

          <List>
            {["User", "Flight-booking", "About us"].map((text, index) => (
              <ListItem
                button
                key={text}
                onClick={() => {
                  history.push(`/main/${text}`);
                }}
              >
                <ListItemIcon>
                  {text == "User" ? (
                    <>
                      {" "}
                      <AccountCircleIcon /> <Divider />
                    </>
                  ) : text == "Flight Book" ? (
                    <>
                      {" "}
                      <FlightIcon /> <Divider />
                    </>
                  ) : (
                    <>
                      {" "}
                      <InfoIcon /> <Divider />
                    </>
                  )}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Divider />
        </div>
      </Drawer>
    </>
  );
};

const mapstateToprops = (state) => {
  console.log("efggfasa", state);
  return {
    User: state.User_data,
  };
};

export default connect(mapstateToprops, null)(Main);
