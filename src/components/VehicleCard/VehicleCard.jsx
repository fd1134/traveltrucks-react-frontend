
import styles from "./VehicleCard.module.css";

const VehicleCard = ({ vehicle }) => {
  return (
    <div className={styles.card}>
      <img src={vehicle.image} alt={vehicle.title} className={styles.image} />

      <div className={styles.content}>
        <div className={styles.header}>
          <h2 className={styles.title}>{vehicle.title}</h2>
          <span className={styles.price}>{vehicle.price}</span>
        </div>

        <p className={styles.location}>{vehicle.location}</p>
        <p className={styles.rating}>{vehicle.rating}</p>
        <p className={styles.description}>{vehicle.description}</p>

        <div className={styles.features}>
          {vehicle.features.map((f) => (
            <span key={f} className={styles.feature}>
              {f}
            </span>
          ))}
        </div>

        <button className={styles.button}>Show more</button>
      </div>
    </div>
  );
}

export default VehicleCard;
