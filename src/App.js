import { Routes, Route } from "react-router-dom";
import Home from "./components/HomePage";
import AllAnimals from "./components/allAnimals";
import "./App.css";

function App() {
  return (
    <div>
      
      <Routes>
        <Route path="/" exact element={<Home />}></Route>
        <Route path="/allAnimals" exact element={<AllAnimals />}></Route>
      </Routes>
    </div>
  );
}

export default App;
