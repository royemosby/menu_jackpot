import { React, useState, useEffect } from "react";

import { MenuItem } from "./menu-item/menuItem";
import styles from "./spriteSheet.module.css";
import { symbols } from "../../../../../assets/symbols";

export function SpriteSheet({
  spinIsPressed,
  rowIsHeld,
  spriteSheetConfig,
  mealList,
}) {
  const fruitNames = Object.keys(symbols);
  const { columns, rowsMultiplier } = spriteSheetConfig;

  const [symbolsSheet, setSymbolsSheet] = useState([[]]);
  const [spriteSheetStyles, setSpriteSheetStyles] = useState(
    styles.spriteSheet
  );

  useEffect(() => {
    if (!spinIsPressed && !rowIsHeld) {
      generateSpriteSheet();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [spinIsPressed, rowIsHeld]);

  useEffect(() => {
    if (rowIsHeld) {
      return;
    }
    if (spinIsPressed) {
      setSpriteSheetStyles(`${styles.spriteSheet} ${styles.spinIsPressed}`);
    } else {
      setSpriteSheetStyles(styles.spriteSheet);
    }
  }, [spinIsPressed, rowIsHeld]);

  const generateSymbolRow = (rowCount) => {
    const rando = () => Math.floor(Math.random() * columns);
    const rows = [];
    for (let i = 0; i < rowCount; i++) {
      rows.push(
        <img
          alt=""
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

    matrix.push(
      <MenuItem mealList={mealList} rowIsHeld={rowIsHeld} key={Date.now()} />
    );

    for (let i = 0; i < height; i++) {
      matrix.push(
        <div key={i} className={styles.symbolRow}>
          {generateSymbolRow(columns)}
        </div>
      );
    }
    setSymbolsSheet(matrix);
  };

  return <div className={spriteSheetStyles}>{symbolsSheet}</div>;
}
