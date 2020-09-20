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
    axios
      .get("https://cars-be-practice.herokuapp.com/api/cars/")
      .then((response) => {
        setCars(response.data);
      })
      .catch((error) => {
        console.log(`Axios error: ${error}`);
        setError(error);
      });
  };

  return (
    <div className="App">
      <h1>Car Database and Car Data Input Form</h1>
      <CarForm />
      <CarList getData={getData} />
    </div>
  );
}

export default App;
