import { Route, Routes } from "react-router-dom";
import  { Suspense,lazy } from "react";
import Loader from "../Loader/Loader";
const Home = lazy(() => import("../../pages/Home/Home"));
const Catalog = lazy(() => import("../../pages/Catalog/Catalog"));
const CatalogDetail = lazy(() => import("../../pages/CatalogDetail/CatalogDetail"));
const Layout = lazy(() => import("../Layout/Layout"));
const VehicleReviews = lazy(() => import("../VehicleReviews/VehicleReviews"));
const VehicleFeatures = lazy(() => import("../VehicleFeatures/VehicleFeatures"));

function App() {
  return (
    <Suspense fallback={<Loader />}>
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
    </Suspense>
  );
}

export default App;
