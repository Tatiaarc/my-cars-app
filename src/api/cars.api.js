import axios from "axios";

export const getCarsRequest = async () =>
  await axios.get("https://my-cars-app-production.up.railway.app/cars");

export const createCarRequest = async (car) =>
  await axios.post("https://my-cars-app-production.up.railway.app/cars", car);

export const deleteCarRequest = async (car_id) =>
  await axios.delete(
    `https://my-cars-app-production.up.railway.app/cars/${car_id}`
  );

export const getCarRequest = async (car_id) =>
  await axios.get(
    `https://my-cars-app-production.up.railway.app/cars/${car_id}`
  );

export const updateCarRequest = async (car_id, newFields) =>
  axios.put(
    `https://my-cars-app-production.up.railway.app/cars/${car_id}`,
    newFields
  );
