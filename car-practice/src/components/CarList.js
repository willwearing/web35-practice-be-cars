import React from "react";

const CarList = (props) => {
  return (
    <div>
      {props.isFetchingData ? (
        <p>Loading Car Data...</p>
      ) : (
        <button onClick={props.getData}>Get all car data</button>
      )}
      {props.error ? (
        <p>Error: {props.error}</p>
      ) : (
        props.cars.map((car) => (
          <div className="car-card">
            <h2>{car.make}</h2>
            <h5>{car.model}</h5>
            <h5>{car.year}</h5>
            <h5>{car.mileage}</h5>
          </div>
        ))
      )}
    </div>
  );
};

export default CarList;
