import { useSelector} from "react-redux";
import { Toaster } from "react-hot-toast";
import { selectVehicle} from "../../redux/vehicles/selectors";
import styles from "./VehicleFeatures.module.css";
import Features from "../Features/Features";
import ClientForm from "../ClientForm/ClientForm";
const VehicleFeatures=()=>{
      const vehicle = useSelector(selectVehicle);
  if (!vehicle) {
    return <p>No vehicle data found.</p>;
  }

    return <>
      <div className={styles.feature}>
          <div className={styles.feature_wrapper}>
              <Features vehicle={vehicle}/>
              <h3 className={styles.equipment_title}>Vehicle details</h3>

                  <div className={styles.truck_info}>
                      <div className={styles.truck_category}><p>Form </p><p>{vehicle.form}</p></div>
                      <div className={styles.truck_category}><p>Length</p><p>{vehicle.length}</p></div>
                      <div className={styles.truck_category}><p>Width</p><p>{vehicle.width}</p></div>
                      <div className={styles.truck_category}><p>Height</p><p>{vehicle.height}</p></div>
                      <div className={styles.truck_category}><p>Tank</p><p>{vehicle.tank}</p></div>
                      <div className={styles.truck_category}><p>Consumption</p><p> {vehicle.consumption}</p></div>
                </div>
          </div>

          <ClientForm/>
           <Toaster position="top-right" reverseOrder={false} />
      </div>

    
    </>
}

export default VehicleFeatures;
