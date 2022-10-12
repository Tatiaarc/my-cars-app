import { useEffect, useState } from "react";

import CarCard from "../components/CarCard.js";
import { useCar } from "../context/CarProvider.js";

function CarsPage() {
  const { cars, loadCar } = useCar();
  const [filteredCar, setFilteredCar] = useState([]);
  const series = cars.map((car) => car.serie);

  function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }

  const series_unique = series.filter(onlyUnique);

  useEffect(() => {
    loadCar();
  });

  function serieFilter(serie) {
    console.log(serie);
    const serieList = cars.filter((car) => car.serie === serie);
    setFilteredCar(serieList);
    console.log(filteredCar);
  }

  function renderFilter() {
    if (filteredCar.length === 0)
      return cars.map((car) => <CarCard car={car} key={car.car_id} />);
    return filteredCar.map((car) => <CarCard car={car} key={car.car_id} />);
  }

  return (
    <div>
      <h1>Cars</h1>

      {series_unique.map((serie) => (
        <button
          id={serie}
          value={serie}
          key={serie}
          onClick={() => serieFilter(serie)}
        >
          {serie}
        </button>
      ))}

      {renderFilter()}
    </div>
  );
}

export default CarsPage;
