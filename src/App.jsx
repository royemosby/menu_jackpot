import "./App.css";

import { Footer } from "./common/footer/footer";
import { Header } from "./common/header/header";
import { mealList } from "./assets/mealList";
import { SlotMachine } from "./features/slotMachine/slotMachine";

function App() {
  const spriteSheetConfig = {
    columns: 6,
    rowsMultiplier: 10,
  };

  return (
    <Header />
    <SlotMachine mealList={mealList} spriteSheetConfig={spriteSheetConfig} />
    <Footer />
  );
}

export default App;
