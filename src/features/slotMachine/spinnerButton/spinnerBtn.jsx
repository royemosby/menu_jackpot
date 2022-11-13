import { React } from "react";
import styles from "./spinnerBtn.module.css";

export function SpinnerBtn({ onPress }) {
  return (
    <div>
      <button
        className={styles.button}
        role="button"
        onClick={(evt) => onPress(evt)}
      >
        Spin the meals!
      </button>
    </div>
  );
}
