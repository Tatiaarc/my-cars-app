import "../App.css";

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
  function closeIcon() {
    // console.log("test");
    document.getElementById("CarPage-menu").style.display = "none";
  }
  function searchIcon() {
    // console.log("test");
    document.getElementById("CarPage-menu").style.display = "grid";
  }

  return (
    <div className="CarPage">
      {/* <h1>Cars</h1> */}

      <div className="CarPage-menu" id="CarPage-menu">
        <div className="CarPage-search" id="CarPage-search">
          <div className="CarPage-search-title">
            <h3>Search</h3>
            <i
              className="gg-close"
              id="gg-close"
              onClick={() => closeIcon()}
            ></i>
          </div>
          <div className="Car-search-input">
            <input
              className="carSearch"
              placeholder=""
              onChange={onSearchValueChange}
            />
          </div>
        </div>
        <div className="CarPage-all-button">
          <button
            className="CarPage-selection-button"
            onClick={() => setEmpty()}
          >
            All Cars
          </button>
        </div>
        <h3>Serie Buttons</h3>
        <div className="CarPage-serie">
          {series_unique.map((serie) => (
            <button
              id={serie}
              value={serie}
              key={serie}
              onClick={() => serieFilter(serie)}
              className="CarPage-selection-button"
            >
              {serie}
            </button>
          ))}
        </div>
        <h3>Brand Buttons</h3>
        <div className="CarPage-brand">
          {brand_unique.map((brand) => (
            <button
              id={brand}
              value={brand}
              key={brand}
              onClick={() => brandFilter(brand)}
              className="CarPage-selection-button"
            >
              {brand}
            </button>
          ))}
        </div>
      </div>

      <div className="CarPage-main">
        <div className="CarPage-count">
          <span>20 cars</span>
          <i className="gg-search" onClick={() => searchIcon()}></i>
        </div>
        <div className="CarPage-cards">{renderFilter()}</div>
      </div>
    </div>
  );
}

export default CarsPage;
