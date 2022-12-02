import React from "react";
import Card from "../UI/Card";
import styles from "./NewUser.module.css";
import Button from "../UI/Button";

const NewUser = (props) => {
  const newUserFormHandler = (e) => {
    e.preventDefault();
  };
  return (
    <Card className={styles.input}>
      <form onSubmit={newUserFormHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text"></input>
        <label htmlFor="age">Age(Years)</label>
        <input id="age" type="number"></input>
        <Button type="submit">Add user</Button>
      </form>
    </Card>
  );
};

export default NewUser;
