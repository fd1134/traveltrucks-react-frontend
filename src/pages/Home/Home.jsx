import styles from "./Home.module.css";

export const Home = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}></div>
      <div className={styles.heroContent}>
        <h1>Campers of your dreams</h1>
        <p>You can find everything you want in our catalog</p>
        <a href="/catalog" className={styles.btn}>
          View Now
        </a>
      </div>
    </section>
  );
};
