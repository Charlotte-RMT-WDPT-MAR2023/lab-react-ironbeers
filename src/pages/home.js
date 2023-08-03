import BeersImg from "../assets/beers.png";
import NewBeerImg from "../assets/new-beer.png";
import RandomBeerImg from "../assets/random-beer.png";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
   <Link to={'/beers'}>
    <div>
          <img src={BeersImg} alt="Beer" />
      <h1>All Beers</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in arcu dolor. Aenean sollicitudin risus metus, ac condimentum mi blandit at. Phasellus ipsum felis, gravida eget eros ut, blandit imperdiet ligula.</p>
    </div>
    </Link>
    
    <Link to={'/randombeer'}>
    <div>
      <img src={RandomBeerImg} alt="Beer" />
      <h1>Random Beer</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in arcu dolor. Aenean sollicitudin risus metus, ac condimentum mi blandit at. Phasellus ipsum felis, gravida eget eros ut, blandit imperdiet ligula.</p>
    </div>
    </Link>

    <Link to={'/newbeer'}>
    <div>
      <img src={NewBeerImg} alt="Beer" />
      <h1>New Beer</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in arcu dolor. Aenean sollicitudin risus metus, ac condimentum mi blandit at. Phasellus ipsum felis, gravida eget eros ut, blandit imperdiet ligula.</p>
    </div>
    </Link>
    </div>
  );
}

export default Home;
