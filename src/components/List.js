import React from "react";
import { Card, CardContent } from "@material-ui/core";
import allCoinsData from "../data.js";
import Table from "./Table.js";

const List = ({ setData }) => {
  return (
    <>
      <Card className="card__left">
        <CardContent>
          <Table coins={allCoinsData} setData={setData} />
        </CardContent>
      </Card>
    </>
  );
};

export default List;
