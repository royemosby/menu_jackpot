import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useState } from "react";

import "./App.css";
import { Admin } from "./features/admin/admin";
import { Footer } from "./common/footer/footer";
import { Header } from "./common/header/header";
import { mealList as mealListArray } from "./assets/mealList";
import { SlotMachine } from "./features/slotMachine/slotMachine";
import { Nav } from "./common/nav/nav";

function App() {
  const [spriteSheetConfig, setSpriteSheetConfig] = useState({
    columns: 6,
    rowsMultiplier: 10,
  });

  const [mealList, setMealList] = useState([...mealListArray]);

  return (
    <Router>
      <Nav />
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <SlotMachine
              mealList={mealList}
              spriteSheetConfig={spriteSheetConfig}
            />
          }
        ></Route>
        <Route
          path="/admin"
          element={
            <Admin
              mealList={mealList}
              setMealList={setMealList}
              spriteSheetConfig={spriteSheetConfig}
              setSpriteSheetConfig={setSpriteSheetConfig}
            />
          }
        ></Route>
        <Route path="*" element={<Navigate to={{ pathname: "/" }} />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
