import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import Header from "../components/Header";

function NewBeer() {
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [firstBrewed, setFirstBrewed] = useState("");
  const [brewersTips, setBrewersTips] = useState("");
  const [attenuationLevel, setAttenuationLevel] = useState(1);
  const [contributedBy, setContributedBy] = useState("");

  const navigate = useNavigate(); 

  const handleSubmit = (e) => {          
    e.preventDefault();
    
    const body = { name: name, tagline:tagline, description:description, firstBrewed: firstBrewed, brewersTips:brewersTips, attenuationLevel:attenuationLevel, contributedBy:contributedBy };

    axios
    .post("https://ih-beers-api2.herokuapp.com/beers/new", body)
    .then((response) => {
      setName("");
      setTagline("");
      setDescription("");
      setFirstBrewed("");
      setBrewersTips("");
      setAttenuationLevel(1);
      setContributedBy("");
      navigate('/'); 
    });
};

  return (
    <div>
      {<Header />}

      <div>
        <h3>Add New Beer</h3>

        <form onSubmit={handleSubmit}>
          <label>Name</label>
          <input
            type="text"
            name="name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />

          <label>Tagline</label>
          <input
            type="text"
            name="tagline"
            onChange={(e) => setTagline(e.target.value)}
            value={tagline}
          />

          <label>Description</label>
          <input
            type="text"
            name="description"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          />

          <label>First Brewed</label>
          <input
            type="text"
            name="firstBrewed"
            onChange={(e) => setFirstBrewed(e.target.value)}
            value={firstBrewed}
          />

          <label>Brewers Tips</label>
          <input
            type="text"
            name="brewersTips"
            onChange={(e) => setBrewersTips(e.target.value)}
            value={brewersTips}
          />

          <label>Attenuation Level</label>
          <input
            type="number"
            name="attenuationLevel"
            onChange={(e) => setAttenuationLevel(e.target.value)}
            value={attenuationLevel}
          />

          <label>Contributed By</label>
          <input
            type="text"
            name="contributedBy"
            onChange={(e) => setContributedBy(e.target.value)}
            value={contributedBy}
          />

          <button type="submit">Add Beer</button>
        </form>
      </div>
    </div>
  );
}

export default NewBeer;
