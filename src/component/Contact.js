import React, { Component } from "react";
// import logo from "./logo.svg";
import "../App.module.css";
import styles from "../App.module.css"
class Contact extends Component {
  render() {
    return (
      <div className={styles.Contact}>
        {" "}
        <h1>Contact Us</h1> If you feel any queries, feel free to ask us
        <br />
        <br /> Email us at{" "}
        <a href="mailto: ncov2019@gmail.com">
          ncov2019@gmail.com
        </a>{" "}
        Or call us at our helpline{" "}
        <a href="callto: +91-11-23978046">+91-11-23978046</a> Our helplines are
        available 24/7{" "}
      </div>
    );
  }
}
export default Contact;
