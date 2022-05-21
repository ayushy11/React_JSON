import React from "react";

function Table({ coins, setData }) {
  return (
    <div className="table">
      {Object.entries(coins).map(
        ([key, value]) => (
          console.log(value),
          (
            <div
              key={value.name}
              onClick={() => setData({ name: value.name, img: value.img })}
              className="table__data"
            >
              <div style={{ padding: "5px" }}>{key}</div>
              <div style={{ padding: "5px" }}>{value.name}</div>
            </div>
          )
        )
      )}
    </div>
  );
}

export default Table;
