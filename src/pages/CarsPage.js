import { useEffect } from "react";

import CarCard from "../components/CarCard.js";
import { useCar } from "../context/CarProvider.js";

function CarsPage() {
  const { cars, loadCar } = useCar();

  useEffect(() => {
    loadCar();
  });

  function renderMain() {
    if (cars.length === 0) return <h1>No Cars Yet</h1>;
    return cars.map((car) => <CarCard car={car} key={car.car_id} />);
  }
  return (
    <div>
      <h1>Cars</h1>
      {renderMain()}
    </div>
  );
}

export default CarsPage;
