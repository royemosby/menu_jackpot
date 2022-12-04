import { React, useEffect, useState } from "react";

import styles from "./dayRowStyles.module.css";
import { Reel } from "./reel/reel";

export function DayRow({
  day,
  spinIsPressed,
  spriteSheetConfig,
  isSpinning,
  mealList,
  firstSpin,
}) {
  const [rowIsHeld, setRowIsHeld] = useState(false);
  const [buttonText, setButtonText] = useState("Press spin");
  const [buttonIsDisabled, setButtonIsDisabled] = useState(true);

  useEffect(() => {
    if (firstSpin) {
      return; //noop
    } else if (rowIsHeld) {
      setButtonText("Release");
    } else {
      setButtonText("Hold");
    }
  }, [firstSpin, rowIsHeld]);

  useEffect(() => {
    if (firstSpin || isSpinning) {
      setButtonIsDisabled(true);
    } else {
      setButtonIsDisabled(false);
    }
  }, [firstSpin, isSpinning]);

  return (
    <div className={styles.wrapper}>
      <span>{day}</span>
      <Reel
        spinIsPressed={spinIsPressed}
        rowIsHeld={rowIsHeld}
        spriteSheetConfig={spriteSheetConfig}
        mealList={mealList}
      />
      <button
        disabled={buttonIsDisabled}
        onClick={() => setRowIsHeld(!rowIsHeld)}
        className={rowIsHeld ? styles.isHeld}
      >
        {buttonText}
      </button>
    </div>
  );
}
