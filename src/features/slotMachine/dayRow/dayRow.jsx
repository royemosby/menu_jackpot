import { React, useState } from "react";
import styles from "./dayRowStyles.module.css";
import { Reel } from "./reel/reel";

export function DayRow({ day, isPressed }) {
  const [isHeld, setIsHeld] = useState(false);

  return (
    <div className={styles.wrapper}>
      <span>{day}</span>
      <Reel isPressed={isPressed} isHeld={isHeld} />
      <button
        role="button"
        onClick={() => setIsHeld(!isHeld)}
        className={isHeld ? styles.isHeld : ""}
      >
        {isHeld ? "Release" : "Hold"}
      </button>
    </div>
  );
}
