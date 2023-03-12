// import mixpanel from "mixpanel-browser";
import React, { useEffect, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import styles from "./signup.module.css";

function Signup() {
  const [email, setEmail] = useState("");
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const [check, setCheck] = useState(false);

  const signPage = () => {
    window.analytics.alias(email);
    window.analytics.track("Signup", {
      $os: "Windows",
      $first_name: fName,
      $last_name: lName,
      $phone: number,
      $email: email,
    });
    // console.log('hi')
  };

  // const mix = () => {
  //   var pass = 100;
  //   if (check) {
  //     mixpanel.alias(email);
  //     mixpanel.track("SIGN UP", {
  //       password: password,
  //       choice: "action movies",
  //     });
  //     mixpanel.people.set({
  //       $email: email,
  //       $first_name: fName,
  //       $last_name: lName,
  //       $phone: number,
  //       visited: 10,
  //     });
  //   }
  // };

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleFirstname = (event) => {
    setFName(event.target.value);
  };

  const handleLastName = (event) => {
    setLName(event.target.value);
  };
  const handleNumber = (event) => {
    setNumber(event.target.value);
  };

  const valid = () => {
    if (
      email !== "" &&
      password !== "" &&
      fName !== "" &&
      lName !== "" &&
      number !== ""
    )
      setCheck(true);
    else setCheck(false);
  };

  useEffect(() => valid(), [email, password, fName, lName, number]);

  const p = "Signup";

  return (
    <div className={styles.body}>
      <Link to="/">
        <div className={styles.log}>Login</div>
      </Link>
      <div className={styles.contain}>
        <h1 className={styles.headLine}>Sign Up </h1>
        <p className={styles.marker}>Email</p>
        <input
          type="email"
          className={styles.text}
          value={email}
          onChange={handleEmail}
        />
        <p className={styles.marker}>First Name</p>
        <input
          type="text"
          className={styles.text}
          value={fName}
          onChange={handleFirstname}
        />
        <p className={styles.marker}>Last Name</p>
        <input
          type="text"
          className={styles.text}
          value={lName}
          onChange={handleLastName}
        />
        <p className={styles.marker}>Phone Number</p>
        <input
          type="text"
          className={styles.text}
          value={number}
          onChange={handleNumber}
        />
        <p className={styles.marker}>Password</p>
        <input
          type="text"
          className={styles.text}
          value={password}
          onChange={handlePassword}
        />
        <div className={styles.button} onClick={signPage}>
          {check && (
            <Link to="/shop" state={{ id: email }} className={styles.link}>
              Signup
            </Link>
          )}
          {!check && p}
        </div>
      </div>
    </div>
  );
}

export default Signup;
