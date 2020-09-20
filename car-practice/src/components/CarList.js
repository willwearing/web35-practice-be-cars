import React from "react";

const CarList = (props) => {
  return (
    <div>
      <button onClick={props.getData}>Get all car data</button>
    </div>
  );
};

export default CarList;
