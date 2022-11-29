import { React, useState, useEffect } from "react";

import styles from "./menuItem.module.css";

export function MenuItem({ mealList, rowIsHeld }) {
  const [meal, setMeal] = useState({ meal: "not set" });

  useEffect(() => {
    if (!rowIsHeld) {
      const mainDishes = mealList.filter((meal) => meal.type === "main");
      const meal = mainDishes[Math.floor(Math.random() * mainDishes.length)];
      setMeal(meal);
    }
  }, [rowIsHeld, mealList]);

  return (
    <div className={styles.menuItem}>
      <h4 contentEditable="true" suppressContentEditableWarning={true}>
        {meal.meal}
      </h4>
    </div>
  );
}
