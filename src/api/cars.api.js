import axios from "axios";

export const getCarsRequest = async () =>
  await axios.get("https://my-cars-app-production.up.railway.app/cars");

export const createCarRequest = async (car) =>
  await axios.post("http://localhost:4000/cars", car);

export const deleteCarRequest = async (car_id) =>
  await axios.delete(`http://localhost:4000/cars/${car_id}`);

export const getCarRequest = async (car_id) =>
  await axios.get(`http://localhost:4000/cars/${car_id}`);

export const updateCarRequest = async (car_id, newFields) =>
  axios.put(`http://localhost:4000/cars/${car_id}`, newFields);
