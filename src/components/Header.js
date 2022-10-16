import "../App.css";
import logo from "../assets/van.png";
import me from "../assets/me-logo.png";

function Header() {
  return (
    <div className="Header">
      <div className="Header-logo">
        <img alt="icon" src={logo} />
      </div>
      <h1>My Car Collection</h1>
      <div className="Header-me-logo">
        <img alt="icon" src={me} />
      </div>
    </div>
  );
}
export default Header;
