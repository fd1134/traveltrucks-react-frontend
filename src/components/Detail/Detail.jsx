import styles from './Detail.module.css';
import icons from "../../assets/icons.svg";
const Detail = () => {
  return (
    <div className={styles.catalog_Detail}>
      <h2 className={styles.catalog_Title}>Road Bear A 30-32</h2>
      <div className={styles.rating_wrapper}>
                <svg width="16" height="16">
                  <use href={`${icons}#icon-Rating`} />
                </svg>
                <p className={styles.reviews}>{4} ({2} Reviews)</p>
                <svg width="20" height="20">
                  <use href={`${icons}#Map`} />
                </svg> {"vehicle.location"}
        </div>
        <span className={styles.catalog_Title}>{`€ ${Number(14000.00).toFixed(2)}`}</span>
    </div>
  );
};

export default Detail;