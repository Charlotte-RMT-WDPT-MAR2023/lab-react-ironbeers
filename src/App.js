import "./App.css";

import Home from "./pages/home";
import Beers from "./pages/Beers";
import NewBeer from "./pages/NewBeer";
import RandomBeer from "./pages/RandomBeer";
import SingleBeer from "./pages/SingleBeer";
import Error from "./pages/Error";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
       <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/beers" element={<Beers />} />
        <Route path="/randombeer" element={<RandomBeer />} />
        <Route path="/newbeer" element={<NewBeer />} />
        <Route path="/beers/:beerId" element={<SingleBeer />} />
        <Route path="/error" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
