import React from "react";

const CountryTable = ({ countriesData, setCountryData }) => {
  return (
    <>
      <div className="table">
        {countriesData.map((country) => (
          <div
            key={country.countryInfo._id}
            onClick={() =>
              setCountryData({
                name: country.country,
                img: country.countryInfo.flag,
              })
            }
            className="table__data"
          >
            <div style={{ padding: "5px" }}>{country.countryInfo._id}</div>
            <div style={{ padding: "5px" }}>{country.country}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CountryTable;
