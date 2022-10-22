import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { SlotMachine } from "./features/slotMachineComponents/slotMachine";
import { AdminIndex } from "./features/adminComponents/index";
import { Footer } from "./common/footer";
import { Header } from "./common/header";
import { mealList } from "./assets/mealList";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<SlotMachine mealList={mealList} />}></Route>
        <Route
          path="/admin"
          element={<AdminIndex mealList={mealList} />}
        ></Route>
        <Route path="*" element={<Navigate to={{ pathname: "/" }} />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
