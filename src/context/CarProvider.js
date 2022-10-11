import { useContext, useState } from "react";
import {
  getCarsRequest,
  deleteCarRequest,
  createCarRequest,
  getCarRequest,
  updateCarRequest,
} from "../api/cars.api.js";
import { CarContext } from "./CarContext.js";

export const useCar = () => {
  const context = useContext(CarContext);
  if (!context) {
    throw new Error("useCar must be within a CarContextProvider");
  }
  return context;
};

export const CarContextProvider = ({ children }) => {
  const [cars, setCar] = useState([]);

  async function loadCar() {
    const response = await getCarsRequest();
    setCar(response.data);
  }

  const deleteCar = async (car_id) => {
    try {
      await deleteCarRequest(car_id);
      setCar(cars.filter((car) => car.car_id !== car_id));
    } catch (error) {
      console.error(error);
    }
  };

  const createCar = async (car) => {
    try {
      await createCarRequest(car);
    } catch (error) {
      console.error(error);
    }
  };

  const getCar = async (car_id) => {
    try {
      const response = await getCarRequest(car_id);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  const updateCar = async (car_id, newFields) => {
    try {
      await updateCarRequest(car_id, newFields);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <CarContext.Provider
      value={{ cars, loadCar, deleteCar, createCar, getCar, updateCar }}
    >
      {children}
    </CarContext.Provider>
  );
};
