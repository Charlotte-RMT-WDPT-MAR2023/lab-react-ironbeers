import Header from "../components/Header";
import axios from "axios";
import { Navigate } from "react-router-dom";
import { useState, useEffect } from "react";

function RandomBeer(props) {
  const [randomBeer, setRandomBeer] = useState({});
  
  useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/random`)
      .then((response) => {
        if (response) {
          setRandomBeer(response.data);
        }
      })
      .catch((err) => <Navigate to="/error" />);
  }, []);

  return (
    <div>
      {<Header />}
      <img src={randomBeer.image_url} height={"200vw"} alt={randomBeer.name} />

      <h1>{randomBeer.name}</h1>
      <h2>{randomBeer.tagline}</h2>
      <p>
        {randomBeer.first_brewed}
        {randomBeer.attenuation_level}
        {randomBeer.description}
        {randomBeer.contributed_by}
      </p>
    </div>
  );
}

export default RandomBeer;
