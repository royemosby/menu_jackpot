import { React } from "react";
import styles from "./reelRowStyles.module.css";
import { SymbolsRow } from "./symbolsRow";
import { MenuItemRow } from "./menuItemRow";

export function ReelRow({ day }) {
  return (
    <div className={styles.wrapper}>
      <span>{day}: </span>
      <SymbolsRow />
      <button role="button">Hold</button>
    </div>
  );
}
