import { useCar } from "../context/CarProvider.js";
import { useNavigate } from "react-router-dom";

function CarCard({ car }) {
  const { deleteCar } = useCar();
  const navigate = useNavigate();

  return (
    <div>
      <h2>{car.name}</h2>
      <p>{car.serie}</p>
      <p>{car.brand}</p>
      <p>{car.image_url}</p>
      <button onClick={() => deleteCar(car.car_id)}>Delete</button>
      <button onClick={() => navigate(`/edit/${car.car_id}`)}>Edit</button>
    </div>
  );
}
export default CarCard;
