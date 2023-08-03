import { Link } from "react-router-dom";
import HeaderImg from "../assets/header.jpg";

function Header() {
    return (
      <div>
      <Link to={'/'}>
      <img src={HeaderImg} alt="Header" />

      </Link>
      </div>
    );
  }
  
  export default Header;