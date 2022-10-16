import "../App.css";
import end_logo from "../assets/volskwagen-van.png";
import { Formik, Form } from "formik";
import { useCar } from "../context/CarProvider.js";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function CarsForm() {
  const { createCar, getCar, updateCar } = useCar();
  const [car, setCar] = useState({
    name: "",
    serie: "",
    brand: "",
    image_url: "",
  });
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const loadCar = async () => {
      if (params.id) {
        const car = await getCar(params.id);

        setCar({
          name: car.name,
          serie: car.serie,
          brand: car.brand,
          image_url: car.image_url,
        });
      }
    };
    loadCar();
  });

  const mode = params.id ? "edit" : "create";
  return (
    <div className="CardForm">
      <div className="CardForm-title">
        <h1>{params.id ? "Edit Car" : "Create Car"}</h1>
      </div>
      <div className="CardForm-Form">
        <Formik
          initialValues={car}
          enableReinitialize={true}
          onSubmit={async (values, actions) => {
            if (params.id) {
              await updateCar(params.id, values);
              navigate("/");
            } else {
              await createCar(values);
            }
            navigate("/");
            setCar({
              name: "",
              serie: "",
              brand: "",
              image_url: "",
            });
            actions.resetForm();
          }}
        >
          {({ handleChange, handleSubmit, values, isSubmitting }) => (
            <Form onSubmit={handleSubmit} className={"CardForm-Form-" + mode}>
              <div className={"CardForm-photo-" + mode}>
                <img src={values.image_url} alt="car_photo" />
              </div>
              <label>Name</label>
              <input
                type="text"
                name="name"
                onChange={handleChange}
                value={values.name}
                placeholder="Write the name of the car"
              />
              <label>Serie</label>
              <input
                type="text"
                name="serie"
                onChange={handleChange}
                value={values.serie}
                placeholder="Write the serie of the car"
              />
              <label>Brand</label>
              <input
                type="text"
                name="brand"
                onChange={handleChange}
                value={values.brand}
                placeholder="Write the brand of the car"
              />
              <div className={"CardForm-Link-" + mode}>
                <label>Link Image</label>
                <input
                  type="text"
                  name="image_url"
                  onChange={handleChange}
                  value={values.image_url}
                  placeholder="Paste the link of cloudinary"
                />
              </div>
              <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Saving..." : "Save"}
              </button>
            </Form>
          )}
        </Formik>
      </div>
      <div className="CardForm-logo">
        <img src={end_logo} alt="van logo" />
      </div>
    </div>
  );
}

export default CarsForm;
