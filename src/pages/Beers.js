import Header from "../components/Header";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Beers() {
  const [allbeers, setBeers] = useState([]);

  useEffect(() => {
    axios.get("https://ih-beers-api2.herokuapp.com/beers").then((response) => {
      console.log("response.data", response.data);
      setBeers(response.data);
    });
  }, []);

  return (
    <div>
      {<Header />}
      <div style={{ display: "flex", justifyContent: "center" }}>
        <table style={{ textAlign: "left", borderCollapse: "collapse" }}>
          <tbody>
            {allbeers.map((beer) => (
              <tr key={beer._id}>
                <td style={{ padding: "10px" }}>
                  <img src={beer.image_url} height={"200vw"} alt={beer.name} />
                </td>
                <td style={{ padding: "10px", maxWidth: "500px" }}>
                  <Link to={`/beers/${beer._id}`}>
                    <h1 style={{ color: "#000" }}>{beer.name}</h1>
                  </Link>
                  <h2 style={{ color: "#444" }}>{beer.tagline}</h2>
                  <p>Created by: {beer.contributed_by}</p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Beers;
