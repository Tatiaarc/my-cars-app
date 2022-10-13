import { Route, Routes } from "react-router-dom";
import "./App.css";
import CarsPage from "./pages/CarsPage.js";
import CarsForm from "./pages/CarsForm.js";
import NotFound from "./pages/NotFound.js";
import { CarContextProvider } from "./context/CarProvider.js";

import Header from "./components/Header.js";
import Navbar from "./components/Navbar.js";

function App() {
  return (
    <CarContextProvider>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<CarsPage />} />
        <Route path="/new" element={<CarsForm />} />
        <Route path="/edit/:id" element={<CarsForm />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </CarContextProvider>
  );
}

export default App;
