import { React, useState } from "react";
import { DayRow } from "./dayRow/dayRow";
import { SpinnerBtn } from "./spinnerButton/spinnerBtn";
import styles from "./slotMachine.module.css";
import { mealList as meals } from "../../assets/mealList";

export function SlotMachine() {
  const [mealList, setMealList] = useState({ ...meals });
  const [isPressed, setIsPressed] = useState(false);
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
    if (isPressed) {
      setIsPressed(false);
      setTimeout(() => setIsPressed(true), 300);
    } else {
      evt.preventDefault();
      setIsPressed(true);
    }
  };

  const renderRows = () => {
    return days.map((day) => {
      return <DayRow key={day.id} day={day.name} isPressed={isPressed} />;
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
