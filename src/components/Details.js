import React from "react";
import { Card, CardContent } from "@material-ui/core";

const Details = ({ data }) => {
  return (
    <>
      <Card className="info__container">
        <CardContent
          className="info__flag"
          style={{ backgroundImage: `url(${data.img})` }}
        ></CardContent>
        <div className="info__name">{data.name}</div>
      </Card>
    </>
  );
};

export default Details;
