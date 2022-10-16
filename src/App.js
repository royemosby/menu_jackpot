import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { SlotMachine } from "./features/slotMachineComponents/index";
import { AdminIndex } from "./features/adminComponents/index";
import { Footer } from "./common/footer";
import { Header } from "./common/header";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<SlotMachine />}></Route>
        <Route path="/admin" element={<AdminIndex />}></Route>
        <Route path="*" element={<Navigate to={{ pathname: "/" }} />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
