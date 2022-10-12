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

  // const selection = document.getElementById("serieButton").;
  // console.log(selection);
  // var serie_online = cars.filter((car) => car.serie === "serie online");

  // function showA() {
  //   setFilteredCar(A);
  // }
  // console.log("test");

  function serieFilter(serie) {
    console.log(serie);
    const serieList = cars.filter((car) => car.serie === serie);
    setFilteredCar(serieList);
    console.log(filteredCar);
  }

  // function setSerie(serieName) {
  //   document
  //     .getElementById("serieButton")
  //     .addEventListener(
  //       "click",
  //       console.log(document.getElementById("serieButton").value)
  //     );
  // }
  // function renderSerie() {

  //   setFilteredCar(serieList);
  //   // console.log(filteredCar);
  //   // filteredCar.map((car) => <CarCard car={car} key={car.car_id} />);
  // }
  // function renderMain() {
  //   setFilteredCar(cars);
  //   console.log(filteredCar);
  // }

  // function getSerie() {
  //   // console.log(cars.map((car) => car.serie));
  //   // console.log(series.filter(onlyUnique));
  //   console.log(series_unique);
  // // }
  // function setSerie(serie) {
  //   var serieN = serie;
  // }
  function renderMain() {
    if (cars.length === 0) return <h1>No Cars Yet</h1>;
    return cars.map((car) => <CarCard car={car} key={car.car_id} />);
  }
  function renderFilter() {
    if (filteredCar.length === 0)
      return cars.map((car) => <CarCard car={car} key={car.car_id} />);
    return filteredCar.map((car) => <CarCard car={car} key={car.car_id} />);
  }
  // function totalRender() {
  //   if (filteredCar.length === 0) {
  //     renderMain();
  //   } else renderFilter();
  // }

  return (
    <div>
      <h1>Cars</h1>
      {/* <button id="all_cars" onClick={() => renderMain()}>
        All Cars
      </button> */}
      {/* <button onClick={() => getSerie()}>Get</button> */}
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
      {/* {series_unique.map((serie) => (
        <button onClick={() => serieFilter(serie)}>{serie}</button>
      ))} */}
      {/* {cars.map((car) => (
        <CarCard car={car} key={car.car_id} />
      ))} */}
      {renderFilter()}
      {/* {renderMain()} */}
      {/* {totalRender()} */}
      {/* {serieList} */}
    </div>
  );
}

export default CarsPage;
