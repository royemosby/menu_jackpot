import { React } from "react";
import styles from "./symbolsRow.module.css";
import { symbols } from "./../../assets/symbols";

export function SymbolsRow() {
  const fruitNames = Object.keys(symbols);
  const columns = 6;

  const generateRow = () => {
    const rando = () => Math.floor(Math.random() * columns);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.symbolRow}>
        <img className={styles.symbol} src={symbols.apple} alt="apple" />
        <img className={styles.symbol} src={symbols.bananna} alt="apple" />
        <img className={styles.symbol} src={symbols.cherry} alt="apple" />
        <img className={styles.symbol} src={symbols.grape} alt="apple" />
        <img className={styles.symbol} src={symbols.pear} alt="apple" />
        <img className={styles.symbol} src={symbols.raspberry} alt="apple" />
        <img className={styles.symbol} src={symbols.watermelon} alt="apple" />
      </div>
    </div>
  );
}
