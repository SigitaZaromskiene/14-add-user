import React, { useState } from "react";
import Card from "../UI/Card";
import styles from "./NewUser.module.css";
import Button from "../UI/Button";

const NewUser = (props) => {
  const [enteterdUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const newUserFormHandler = (e) => {
    e.preventDefault();
    setEnteredUsername("");
    setEnteredAge("");

    if (
      enteterdUsername.trim().length === 0 ||
      enteredAge.trim().length === 0
    ) {
      return;
    }

    if (+enteredAge < 1) {
      return;
    }
  };

  const usernameHandler = (e) => {
    setEnteredUsername(e.target.value);
  };

  const ageHandler = (e) => {
    setEnteredAge(e.target.value);
  };
  return (
    <Card className={styles.input}>
      <form onSubmit={newUserFormHandler}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          onChange={usernameHandler}
          value={enteterdUsername}
        ></input>
        <label htmlFor="age">Age(Years)</label>
        <input
          id="age"
          type="number"
          onChange={ageHandler}
          value={enteredAge}
        ></input>
        <Button type="submit">Add user</Button>
      </form>
    </Card>
  );
};

export default NewUser;
