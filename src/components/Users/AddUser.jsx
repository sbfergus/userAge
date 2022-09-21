import { useState } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./AddUser.module.css";

const AddUser = () => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const addUserHandler = (e) => {
    e.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      return;
    }
    if (Number(enteredAge) < 1) {
      return;
    }
    setEnteredAge("");
    setEnteredUsername("");
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          onChange={(e) => {
            setEnteredUsername(e.target.value);
          }}
          value={enteredUsername}
          id="username"
          type="text"
        />
        <label htmlFor="age">Age</label>
        <input
          onChange={(e) => {
            setEnteredAge(e.target.value);
          }}
          value={enteredAge}
          id="age"
          type="number"
        />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
