import { React } from "react";
import styles from "./dayRowStyles.module.css";
import { Reel } from "./reel/reel";

export function DayRow({ day, isPressed }) {
  return (
    <div className={styles.wrapper}>
      <span>{day}</span>
      <Reel isPressed={isPressed} />
      <button role="button">Hold</button>
    </div>
  );
}
