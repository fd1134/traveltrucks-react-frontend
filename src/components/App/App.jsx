import { Route, Routes } from "react-router-dom";
import Home from "../../pages/Home/Home";
import Catalog from "../../pages/Catalog/Catalog";
import CatalogDetail from "../../pages/CatalogDetail/CatalogDetail";
import VehicleFeatures from "../VehicleFatures/VehicleFatures";
import VehicleReviews from "../VehicleReviews/VehicleReviews";
import Layout from "../Layout/Layout";
function App() {
  return (
    <>
     <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="catalog" element={<Catalog />} />
        <Route path="catalog/:id" element={<CatalogDetail />}>
          <Route path="reviews" element={<VehicleReviews />} />
          <Route path="features" element={<VehicleFeatures />} />
        </Route>
      </Route>
    </Routes>
    </>
  );
}

export default App;
