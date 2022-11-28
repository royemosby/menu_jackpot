import React from "react";
import styles from "./adminForm.module.css";

export function AdminForm() {
  const handleSubmit = (evt) => {
    evt.preventDefault();
  };
  return (
    <form className={styles.adminForm} onSubmit={handleSubmit}>
      <label htmlFor="woof">Some Label</label>
      <input id="woof" type="text" />
      <input type="submit" />
    </form>
  );
}
