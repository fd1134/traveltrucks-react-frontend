import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchVehicles } from "../../redux/vehicles/operations";
import Button from "../../components/Button/Button";
import { 
  selectVehiclesStatus, 
  selectVehicles,
  selectVehiclesError 
} from "../../redux/vehicles/selectors";
import Filters from "../../components/Filters/Filters";
import VehicleList from "../../components/VehicleList/VehicleList";
import styles from "./Catalog.module.css";
import Loader from "../../components/Loader/Loader";

const Catalog = () => {
  const dispatch = useDispatch();
  const vehicles = useSelector(selectVehicles); 
  const loading = useSelector(selectVehiclesStatus);
  const error = useSelector(selectVehiclesError); 
  
  const [visibleCount, setVisibleCount] = useState(4);

  useEffect(() => {
    dispatch(fetchVehicles());
  }, [dispatch]);

  useEffect(() => {
    setVisibleCount(4);
  }, [vehicles]);

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
        {error && (
          <p className={styles.text}>Sorry, there are no campers!</p>
        )}
        {!loading && !error && (
          <>
            <VehicleList vehicles={vehicles.slice(0, visibleCount)} />
            {visibleCount < vehicles.length && (
              <Button variant="outlined" type="button" onClick={onClickButton}>
                Load more
              </Button>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default Catalog;
