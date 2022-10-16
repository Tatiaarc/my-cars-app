import "../App.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="Navbar">
      <button className="Navbar-button">
        <Link to="/" className="Link">
          Home
        </Link>
      </button>
      <button className="Navbar-button new">
        <Link to="/new" className="Link">
          New Car
        </Link>
      </button>
    </div>
  );
}

export default Navbar;
