import React, { useState, useEffect } from "react";
import { db } from "../config";
import TextField from "@material-ui/core/TextField";
import styles from "../css.module.css";
import Button from "@material-ui/core/Button";
import { getDatabase, ref, onValue } from "firebase/database";
const Booking = () => {
  const [countries, set_countries] = useState([]);
  const [Input, set_Input] = useState(null);
  const [blogs, setBlogs] = useState(null);

  const fetchBlogs = async () => {
    const response = db.collection("countries");
    const data = await response.get();
    console.log("data", data);
    data.docs.forEach((item) => {
      console.log("item.data()data", item.data().countries.Countries);

      setBlogs(item.data().countries.Countries);
    });
    console.log(blogs, countries);
  };
  useEffect(() => {
    fetchBlogs();
  }, []);
  // console.log("dcrcrata", blogs);

  const handleSubmit = () => {
    // fetchBlogs();
    console.log("blobh", blogs, Input);

    let result = blogs.filter((a) => {
      console.log("as", a);
      if (a.Name.toLowerCase().includes(Input)) {
        return a.Name;
      }
    });

    console.log("res b", result);
    set_countries(result);
    // let results = blogs.filter((x) => x.includes(Input));
    // console.log("as res", results);
  };
  // console.log("countries", countries);
  console.log("dcrcrata", typeof blogs);

  return (
    <>
      <div className={styles.Search}>
        {" "}
        <TextField
          required
          id="standard-required"
          label="Input"
          // type="email"
          value={Input}
          variant="outlined"
          className={styles.MuiTextField}
          onChange={(e) => {
            console.log("df", e.target.value);
            set_Input(e.target.value);
          }}
        />{" "}
        <TextField
          required
          id="standard-required"
          label="Input"
          // type="email"
          // value={Input}
          variant="outlined"
          className={styles.MuiTextField}
          // onChange={(e) => {
          //   console.log("df", e.target.value);
          //   set_Input(e.target.value);
          // }}
        />{" "}
        <Button
          variant="contained"
          color="primary"
          // className={}
          onClick={handleSubmit}
        >
          Search{" "}
        </Button>
      </div>
      {countries && (
        <>
          {countries.map((place) => {
            return <li>{place.Name}</li>;
          })}
        </>
      )}
      <div></div>
    </>
  );
};
export default Booking;
