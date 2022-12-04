import React from "react";

import styles from "./header.module.css";

export function Header() {
  //BUG todo rename styles.header to ...footer
  return (
    <header className={styles.header}>
      <h1>MENU JACKPOT</h1>
      <h2>Spin your way to a meal plan!</h2>
    </header>
  );
}
