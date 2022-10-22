import { React } from "react";
import { MenuItemRow } from "./menuItemRow";
import { ReelRow } from "./reelRow";
import { SpinnerBtn } from "./spinnerBtn";
import { SymbolsRow } from "./symbolsRow";
import styles from "./slotMachine.module.css";

export function SlotMachine() {
  const days = [
    { name: "Sunday", id: 0 },
    { name: "Monday", id: 1 },
    { name: "Tuesday", id: 2 },
    { name: "Wednesday", id: 3 },
    { name: "Thursday", id: 4 },
    { name: "Friday", id: 5 },
    { name: "Saturday", id: 6 },
  ];

  const renderRows = () => {
    return days.map((day) => {
      return <ReelRow key={day.id} day={day.name} />;
    });
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.buttonRow}>
        <SpinnerBtn />
      </div>
      <div className={styles.reelRows}>{renderRows()}</div>
    </div>
  );
}
