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

  return (
    <div>
      <h1>{params.id ? "Edit Car" : "Create Car"}</h1>

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
          <Form onSubmit={handleSubmit}>
            <label>Name</label>
            <input
              type="text"
              name="name"
              onChange={handleChange}
              value={values.name}
            />
            <label>Serie</label>
            <input
              type="text"
              name="serie"
              onChange={handleChange}
              value={values.serie}
            />
            <label>Brand</label>
            <input
              type="text"
              name="brand"
              onChange={handleChange}
              value={values.brand}
            />
            <label>Link Image</label>
            <input
              type="text"
              name="image_url"
              onChange={handleChange}
              value={values.image_url}
            />
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Saving..." : "Save"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default CarsForm;
