import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchVehicles } from "../../redux/vehicles/operations";
import Button from "../../components/Button/Button";

import { selectVehiclesStatus, selectVehicles } from "../../redux/vehicles/selectors";
import Filters from "../../components/Filters/Filters";
import VehicleList from "../../components/VehicleList/VehicleList";

import styles from "./Catalog.module.css";
import Loader from "../../components/Loader/Loader";

const Catalog = () => {
  const dispatch = useDispatch();
  const filteredVehicles = useSelector(selectVehicles);
  const loading = useSelector(selectVehiclesStatus);

  const [visibleCount, setVisibleCount] = useState(4);

  // ✅ Sadece burada tanımla
  const vehiclesToShow = Array.isArray(filteredVehicles) ? filteredVehicles : [];

  useEffect(() => {
    dispatch(fetchVehicles());
  }, [dispatch]);

  useEffect(() => {
    setVisibleCount(4);
  }, [filteredVehicles]);

  const onClickButton = () => {
    setVisibleCount((prevCount) => prevCount + 4);
  };

  return (
    <section className={styles.container}>
      <div className={styles.sidebar}>
        <Filters />
      </div>
      <div className={styles.content}>
        {loading && <Loader />}

        <VehicleList vehicles={vehiclesToShow.slice(0, visibleCount)} />

    

        {!loading && visibleCount < vehiclesToShow.length && (
          <Button variant="outlined" type="button" onClick={onClickButton}>
            Load more
          </Button>
        )}
      </div>
    </section>
  );
};

export default Catalog;
