import VehicleCard from "../VehicleCard/VehicleCard";
import styles from "./VehicleList.module.css";
import Loader from "../Loader/Loader";

const VehicleList = ({ vehicles, loading }) => {
  if (loading) {
    return <Loader />; 
  }

  if (vehicles.length === 0) {
    return <p className={styles.text}>Sorry, there are no campers!</p>;
  }

  return (
    <div className={styles.list_wrapper}>
      {vehicles.map((vehicle) => (
        <VehicleCard key={vehicle.id} vehicle={vehicle} />
      ))}
    </div>
  );
};

export default VehicleList;
