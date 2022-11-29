import { React } from "react";

import styles from "./reel.module.css";
import { SpriteSheet } from "./sprite-sheet/spriteSheet";

export function Reel({
  spinIsPressed,
  spriteSheetConfig,
  rowIsHeld,
  mealList,
}) {
  return (
    <div className={styles.reelWrapper}>
      <SpriteSheet
        mealList={mealList}
        spinIsPressed={spinIsPressed}
        rowIsHeld={rowIsHeld}
        spriteSheetConfig={spriteSheetConfig}
      />
    </div>
  );
}
