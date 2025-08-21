
import styles from "./LocationInput.module.css";

const LocationInput = () => {
  return (
    <div className={styles.container}>
      <label className={styles.label}>Location</label>
      <input
        type="text"
        placeholder="Kyiv, Ukraine"
        className={styles.input}
      />
    </div>
  );
}

export default LocationInput;
