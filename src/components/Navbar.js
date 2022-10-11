import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <button>
        <Link to="/">All Cars</Link>
      </button>
      <button>
        <Link to="/new">New Car</Link>
      </button>
    </div>
  );
}

export default Navbar;
