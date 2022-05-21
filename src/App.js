import React, { useState } from "react";
import "./App.css";
import Details from "./components/Details";
import List from "./components/List";
import CountryDetails from "./components/CountryDetails";
import CountryList from "./components/CountryList";

export function App() {
  const [data, setData] = useState({ name: "", img: "" });
  const [countryData, setCountryData] = useState({ name: "", img: "" });

  return (
    <main>
      <div className="container">
        <div className="list">
          <h2>Crypto Coins List</h2>
          <List setData={setData} />
        </div>

        <div className="details">
          <h2>Crypto Coin Details</h2>
          <Details data={data} />
        </div>
      </div>

      <div className="container">
        <div className="details">
          <h2>Country Details</h2>
          <CountryDetails countryData={countryData} />
        </div>

        <div className="list">
          <h2>Countries List</h2>
          <CountryList setCountryData={setCountryData} />
        </div>
      </div>
    </main>
  );
}
