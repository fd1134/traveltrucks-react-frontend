import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchVehicles } from "../../redux/vehicles/operations";
import Button from "../../components/Button/Button";

import {
  selectVehiclesStatus,
  selectFilteredVehicles,
} from "../../redux/vehicles/selectors";
import Filters from "../../components/Filters/Filters";
import VehicleList from "../../components/VehicleList/VehicleList";

import styles from "./Catalog.module.css";

const INITIAL_VISIBLE_COUNT = 4;

const Catalog = () => {
  const dispatch = useDispatch();
  const filteredVehicles = useSelector(selectFilteredVehicles);
  const loading = useSelector(selectVehiclesStatus);

  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_COUNT);

  useEffect(() => {
    dispatch(fetchVehicles());
  }, [dispatch]);

  useEffect(() => {
    setVisibleCount(INITIAL_VISIBLE_COUNT);
  }, [filteredVehicles]);

  const handleLoadMore = () =>
    setVisibleCount((prev) => prev + INITIAL_VISIBLE_COUNT);

  const canLoadMore = !loading && visibleCount < filteredVehicles.length;
  console.log("Filtered Vehicles:", filteredVehicles);
  return (
    <section className={styles.container}>
      <div className={styles.sidebar}>
        <Filters />
      </div>

      <div className={styles.content}>
        <VehicleList
          vehicles={filteredVehicles.slice(0, visibleCount)}
          loading={loading}
        />

        {canLoadMore && (
          <Button variant="outlined" type="button" onClick={handleLoadMore}>
            Load more
          </Button>
        )}
      </div>
    </section>
  );
};

export default Catalog;
