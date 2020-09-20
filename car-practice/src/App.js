import React, { useState } from "react";
import axios from "axios";
import CarForm from "./components/CarForm";
import CarList from "./components/CarList";

import "./App.css";

function App() {
  const [error, setError] = useState("");
  const [isFetchingData, setIsFetchingData] = useState(false);
  const [newCarData, setNewCarData] = useState([]);
  const [cars, setCars] = useState([]);

  const getData = () => {
    setIsFetchingData(true);

    axios
      .get("https://cars-be-practice.herokuapp.com/api/cars/")
      .then((response) => {
        setCars(response.data);
        // console.log(cars); - response.data is being correctly set in state to cars
        setIsFetchingData(false);
      })
      .catch((error) => {
        console.log(`Axios error: ${error}`);
        setError(error);
        setIsFetchingData(false);
      });
  };

  return (
    <div className="App">
      <h1>Car Database and Car Data Input Form</h1>
      <CarForm />
      <CarList
        getData={getData}
        error={error}
        cars={cars}
        isFetchingData={isFetchingData}
      />
    </div>
  );
}

export default App;
