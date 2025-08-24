import styles from './CatalogDetail.module.css';
import Detail from '../../components/Detail/Detail';
import { Outlet } from 'react-router-dom';
const CatalogDetail = () => {
  return (
    <section className={styles.catalogDetail}>
      
      <Detail />
      <Outlet />
    </section>
  );
};

export default CatalogDetail;