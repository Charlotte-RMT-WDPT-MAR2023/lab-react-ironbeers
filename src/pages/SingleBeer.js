import Header from "../components/Header";
import axios from "axios";
import { useParams, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";

function SingleBeer(props) {
  const { BeerId } = useParams();
  const [foundBeer, setFoundBeer] = useState();
  console.log("beerId -->", BeerId);

  useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${BeerId}`)
      .then((response) => {
        if (response) {
          setFoundBeer(response.data);
        }
      })
      .catch((err) => <Navigate to="/error" />);
  }, [BeerId]);

  return (
    <div>
      {<Header />}
      <img src={foundBeer.image_url} height={"200vw"} alt={foundBeer.name} />

      <h1>{foundBeer.name}</h1>
      <h2>{foundBeer.tagline}</h2>
      <p>
        {foundBeer.first_brewed}
        {foundBeer.attenuation_level}
        {foundBeer.description}
        {foundBeer.contributed_by}
      </p>
    </div>
  );
}

export default SingleBeer;
