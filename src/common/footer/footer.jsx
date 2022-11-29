import React from "react";

import styles from "./footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <h2>
        <span>🧑‍🍳</span> Created with <span>🍳</span> for{" "}
        <a href="https://codethedream.org/by">CTD</a> <span>🧑‍🍳</span>
      </h2>
      <h3>Best viewed on desktop</h3>
    </footer>
  );
}
