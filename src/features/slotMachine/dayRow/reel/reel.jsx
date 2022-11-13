import { React } from "react";
import styles from "./reel.module.css";
import { symbols } from "../../../../assets/symbols";
import { MenuItem } from "./menuItem";

export function Reel({ isPressed }) {
  const fruitNames = Object.keys(symbols);
  const columns = 6;
  const rowsMultiplier = 10;

  const generateSymbolRow = (rowCount) => {
    const rando = () => Math.floor(Math.random() * columns);
    const rows = [];
    for (let i = 0; i < rowCount; i++) {
      rows.push(
        <img
          key={i}
          className={styles.symbol}
          src={symbols[fruitNames[rando()]]}
        ></img>
      );
    }
    return rows;
  };

  const generateSpriteSheet = () => {
    const height = Math.ceil(Math.random() * rowsMultiplier + 4);
    const matrix = [];
    matrix.push(<MenuItem key={height} />);
    for (let i = 0; i < height; i++) {
      matrix.push(
        <div key={i} className={styles.symbolRow}>
          {generateSymbolRow(columns)}
        </div>
      );
    }
    return matrix;
  };

  const applySpriteSheetStyles = () => {
    if (isPressed) {
      return `${styles.spriteSheet} ${styles.isPressed}`;
    } else {
      return `${styles.spriteSheet}`;
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={applySpriteSheetStyles()}>{generateSpriteSheet()}</div>
    </div>
  );
}
