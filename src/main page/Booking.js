import React, { useState, useEffect } from "react";
import { db } from "../config";

const Booking = () => {
  const [currency, set_currency] = useState([]);
  const [countries, set_countries] = useState([]);
  useEffect(async () => {
    // useEffect(() => {
    //     let data = await db.collection("skyscaner").add({
    //       });
    // }, [])
    // const set = async () => {
    //   await db.collection("skyscanner").add({
    //     countries: countries,
    //   });
    //   await db.collection("skyscanner").add({
    //     currency: currency,
    //   });
    // };
    // set();
  }, []);

  //   const set = async () => {
  //     await db.collection("skyscanner").add({
  //       countries: countries,
  //     });
  //     await db.collection("skyscanner").add({
  //       currency: currency,
  //     });
  //   };

  return <div></div>;
};

export default Booking;
