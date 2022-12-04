import { React, useState } from "react";

import { DayRow } from "./dayRow/dayRow";
import { SpinnerBtn } from "./spinnerButton/spinnerBtn";
import styles from "./slotMachine.module.css";

export function SlotMachine({ spriteSheetConfig, mealList }) {
  const [spinIsPressed, setSpinIsPressed] = useState(false);
  const [isSpinning, setIsSpinning] = useState(false);
  const [firstSpin, setFirstSpin] = useState(true);

  const days = [
    { name: "Sunday", id: 0 },
    { name: "Monday", id: 1 },
    { name: "Tuesday", id: 2 },
    { name: "Wednesday", id: 3 },
    { name: "Thursday", id: 4 },
    { name: "Friday", id: 5 },
    { name: "Saturday", id: 6 },
  ];

  const handlePress = (evt) => {
    if (firstSpin) {
      //BUG todo: replace :25 firstSpin = false;
      setFirstSpin(false);
    }
    if (spinIsPressed) {
      setIsSpinning(true);
      setTimeout(() => setIsSpinning(false), 3000);
      setSpinIsPressed(false);
      setTimeout(() => setSpinIsPressed(true), 300);
    } else {
      evt.preventDefault();
      setSpinIsPressed(true);
    }
  };

  const renderRows = () => {
    return days.map((day) => {
      return (
        <DayRow
          firstSpin={firstSpin}
          mealList={mealList}
          key={day.id}
          day={day.name}
          isSpinning={isSpinning}
          spinIsPressed={spinIsPressed}
          spriteSheetConfig={spriteSheetConfig}
        />
      );
    });
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.buttonRow}>
        <SpinnerBtn onPress={handlePress} />
      </div>
      <div className={styles.reelRows}>{renderRows()}</div>
    </div>
  );
}
