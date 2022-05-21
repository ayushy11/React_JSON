import React from "react";
import { Card, CardContent } from "@material-ui/core";
import CountryTable from "./CountryTable.js";
import countriesData from "../countries";

const CountryList = ({ setCountryData }) => {
  return (
    <>
      <Card className="card__left">
        <CardContent>
          <CountryTable
            countriesData={countriesData}
            setCountryData={setCountryData}
          />
        </CardContent>
      </Card>
    </>
  );
};

export default CountryList;
