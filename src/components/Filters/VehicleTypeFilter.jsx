
import styles from "./VehicleTypeFilter.module.css";

const types = ["Van", "Fully Integrated", "Alcove"];

const VehicleTypeFilter = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Vehicle type</h3>
      <div className={styles.grid}>
        {types.map((type) => (
          <button key={type} className={styles.button}>
            {type}
          </button>
        ))}
      </div>
    </div>
  );
}

export default VehicleTypeFilter;
