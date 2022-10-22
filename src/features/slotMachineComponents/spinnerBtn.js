import { React } from "react";
import styles from "./spinnerBtn.module.css";

export function SpinnerBtn() {
  return (
    <div>
      <button className={styles.button} role="button">
        Spin the meals!
      </button>
    </div>
  );
}
