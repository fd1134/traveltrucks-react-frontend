import { Link } from "react-router-dom";
import styles from "./Home.module.css";

export const Home = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}></div>
      <div className={styles.heroContent}>
        <h1>Campers of your dreams</h1>
        <p>You can find everything you want in our catalog</p>
        <Link to="/catalog">
          <span className={styles.btn}>View Now</span>
        </Link>
      </div>
    </section>
  );
};
