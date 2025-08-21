
import styles from "./VehicleEquipmentFilter.module.css";

const equipment = ["AC", "Automatic", "Kitchen", "TV", "Bathroom"];

const VehicleEquipmentFilter = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Vehicle equipment</h3>
      <div className={styles.grid}>
        {equipment.map((item) => (
          <button key={item} className={styles.button}>
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}

export default VehicleEquipmentFilter;
