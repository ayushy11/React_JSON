import React from "react";
import { Card, CardContent } from "@material-ui/core";

const CountryDetails = ({ countryData }) => {
  return (
    <>
      <Card className="info__container">
        <CardContent
          className="info__flag"
          style={{ backgroundImage: `url(${countryData.img})` }}
        ></CardContent>
        <div className="info__name">{countryData.name}</div>
      </Card>
    </>
  );
};

export default CountryDetails;
