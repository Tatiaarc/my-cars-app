import { pool } from "../db.js";

export const getCars = async (req, res) => {
  try {
    const [result] = await pool.query(
      "SELECT * FROM cars ORDER BY createdAt DESC"
    );
    console.log(result);
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const getCar = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM cars WHERE car_id = ?", [
      req.params.id,
    ]);

    if (result.length === 0)
      return res.status(404).json({ message: "Car not found" });

    res.json(result[0]);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const createCar = async (req, res) => {
  try {
    const { name, serie, brand, image_url } = req.body;
    const [result] = await pool.query(
      "INSERT INTO cars(name, serie, brand, image_url) VALUES (?, ?, ?, ?)",
      [name, serie, brand, image_url]
    );
    console.log(result);
    res.json({
      id: result.insertId,
      name,
      serie,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const updateCar = async (req, res) => {
  try {
    const { name, serie, brand, image_url } = req.body;
    const result = await pool.query("UPDATE cars SET ? WHERE car_id = ?", [
      req.body,
      req.params.id,
    ]);
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const deleteCar = async (req, res) => {
  try {
    const [result] = await pool.query("DELETE FROM cars WHERE car_id = ?", [
      req.params.id,
    ]);

    if (result.affectedRows === 0)
      return res.status(404).json({ message: "Car not found" });
    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
