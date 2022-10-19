import "../App.css";
import { useCar } from "../context/CarProvider.js";
import { useNavigate } from "react-router-dom";

function CarCard({ car }) {
  const { deleteCar } = useCar();
  const navigate = useNavigate();

  return (
    <div className="CarCard">
      <div className="CarCard-delete">
        <i
          className="gg-close delete"
          onClick={() => deleteCar(car.car_id)}
        ></i>
      </div>
      <div className="CarCard-image">
        <img src={car.image_url} alt="car" />
      </div>
      <div className="CarCard-text">
        <h2>{car.name}</h2>
        <h3>{car.serie}</h3>
      </div>
      <div className="CarCard-button">
        <button onClick={() => navigate(`/edit/${car.car_id}`)}>Open</button>
      </div>
    </div>
  );
}
export default CarCard;
