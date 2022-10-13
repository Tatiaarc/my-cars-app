import "../App.css";
import logo from "../assets/van.png";

function Header() {
  return (
    <div className="Header">
      <div className="Header-logo">
        <img alt="icon" src={logo} />
      </div>
      <h1>My Car Collection</h1>
    </div>
  );
}
export default Header;
