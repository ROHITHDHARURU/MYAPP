import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import Sum from "./Components/Sum";
import Header from "./Components/Header";
import CovidData from "./Components/CovidData";

const App = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/covidData" element={<CovidData/>} />
      <Route path="/sum" element={<Sum />} />
    </Routes>
  </Router>
);

export default App;
