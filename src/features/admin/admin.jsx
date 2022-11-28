import React from "react";
import { AdminForm } from "./admin-form/adminForm";
import styles from "./admin.module.css";

export function Admin({
  mealList,
  setMealList,
  spriteSheetConfig,
  setSpriteSheetConfig,
}) {
  return (
    <div className={styles.wrapper}>
      <AdminForm />
    </div>
  );
}
