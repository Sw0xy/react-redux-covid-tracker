import React from "react";
import "./App.css";
import Cards from "./components/Cards";
import Chart from "./components/Chart";
import Header from "./components/Header";
import SelectCountry from "./components/SelectCountry";

function App() {
  return (
    <div className="App">
      <img
        src="https://nextui.org/gradient-right-dark.svg"
        alt="gradient"
        className="gradient-left"
      />
      <img
        src="  https://nextui.org/gradient-left-dark.svg"
        alt="gradient"
        className="gradient-right"
      />

      <Header />

      <div className="container">
        <SelectCountry />

        <Cards />
        <div className="chart-container">
          <Chart />
        </div>

        <span className="footerText">
          Developed by <a href="https://github.com/Sw0xy">@Swoxy</a>
        </span>
      </div>
    </div>
  );
}

export default App;
