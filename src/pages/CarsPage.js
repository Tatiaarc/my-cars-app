import { useEffect, useState } from "react";

import CarCard from "../components/CarCard.js";
import { useCar } from "../context/CarProvider.js";

function CarsPage() {
  const { cars, loadCar } = useCar();
  const [filteredCar, setFilteredCar] = useState([]);
  const [searchValue, setSearchValue] = useState([]);
  const series = cars.map((car) => car.serie);
  const brands = cars.map((car) => car.brand);

  function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }
  // function onlyUniqueBrand(value, index, self) {
  //   return self.indexOf(value) === index;
  // }

  const series_unique = series.filter(onlyUnique);
  const brand_unique = brands.filter(onlyUnique);

  useEffect(() => {
    loadCar();
  });

  function serieFilter(serie) {
    console.log(serie);
    const serieList = cars.filter((car) => car.serie === serie);
    setFilteredCar(serieList);
    console.log(filteredCar);
  }
  function brandFilter(brand) {
    console.log(brand);
    const brandList = cars.filter((car) => car.brand === brand);
    setFilteredCar(brandList);
    console.log(filteredCar);
  }
  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value);
    // console.log(searchValue);
  };
  let searchedCars = [];

  if (!searchValue.length >= 1) {
    searchedCars = cars;
  } else {
    searchedCars = cars.filter((car) => {
      return car.name.toLowerCase().includes(searchValue.toLowerCase());
    });
  }

  function setEmpty() {
    setFilteredCar(cars);
    searchedCars = cars;
  }

  function renderFilter() {
    if (filteredCar.length === 0 && !searchValue.length >= 1)
      return cars.map((car) => <CarCard car={car} key={car.car_id} />);
    else if (searchValue.length >= 1)
      return searchedCars.map((car) => <CarCard car={car} key={car.car_id} />);
    else
      return filteredCar.map((car) => <CarCard car={car} key={car.car_id} />);
  }

  return (
    <div>
      <h1>Cars</h1>
      <h3>Search</h3>
      <input
        className="TodoSearch"
        placeholder=""
        onChange={onSearchValueChange}
      />
      <button onClick={() => setEmpty()}>All Cars</button>
      <h3>Serie Buttons</h3>
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
      <h3>Brand Buttons</h3>
      {brand_unique.map((brand) => (
        <button
          id={brand}
          value={brand}
          key={brand}
          onClick={() => brandFilter(brand)}
        >
          {brand}
        </button>
      ))}
      {renderFilter()}
    </div>
  );
}

export default CarsPage;
