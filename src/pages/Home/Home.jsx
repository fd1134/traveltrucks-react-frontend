import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import  Button  from "../../components/Button/Button";

const Home = () => {
  return (
    <section className={styles.hero}>
      
      <div className={styles.heroContent}>
        <h1>Campers of your dreams</h1>
        <p>You can find everything you want in our catalog</p>
        <Link to="/catalog">
          <Button variant = "filled" >
            View Now
          </Button>
        </Link>
      </div>
    </section>
  );
};
export default Home;