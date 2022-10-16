import { React } from "react";
import { MenuItemRow } from "./menuItemRow";
import { ReelRow } from "./reelRow";
import { SpinnerBtn } from "./spinnerBtn";
import { SymbolsRow } from "./symbolsRow";
import styles from "./indexStyles.module.css";

export function SlotMachine() {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const renderRows = () => {
    return days.map((day) => {
      return <ReelRow day={day} />;
    });
  };
  return (
    <div className={styles.wrapper}>
      <SpinnerBtn />
      {renderRows()}
    </div>
  );
}
