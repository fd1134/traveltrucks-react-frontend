import Sidebar from "../../components/Sidebar/Sidebar";
import VehicleList from "../../components/VehicleList/VehicleList";

import styles from "./Catalog.module.css";
 const Catalog = () => {
  return (
    <section className={styles.container}>
     
      <div className={styles.sidebar}>
        <Sidebar />
      </div>
      <div className={styles.content}>
      <VehicleList />
      </div>
    
    </section>
  );
};
export default Catalog;