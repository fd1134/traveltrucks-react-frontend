import { NavLink, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import clsx from "clsx";

import { fetchVehicleDetails } from "../../redux/vehicles/operations";
import { selectVehicle, selectVehiclesStatus } from "../../redux/vehicles/selectors";

import styles from "./Detail.module.css";
import icons from "../../assets/icons.svg";
import Loader from "../Loader/Loader";

const activeLink = ({ isActive }) =>
  clsx(styles.details_link, isActive && styles.active);

const Detail = () => {
  const vehicle = useSelector(selectVehicle);
  const status = useSelector(selectVehiclesStatus);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      dispatch(fetchVehicleDetails(id));
    }
  }, [dispatch, id]);

 
  if (status) {
    return <Loader />;
  }



  
  if (!vehicle) {
    return <p className={styles.error}>No vehicle data found.</p>;
  }

  return (
    <>
      <div className={styles.catalog_Detail}>
        <h2 className={styles.catalog_Title}>{vehicle?.name}</h2>

        <div className={styles.rating_wrapper}>
          <svg width="16" height="16">
            <use xlinkHref={`${icons}#icon-Rating`} />
          </svg>
          <p className={styles.reviews}>
            {vehicle?.rating} ({vehicle?.reviews?.length || 0} Reviews)
          </p>
          <svg width="20" height="20">
            <use xlinkHref={`${icons}#Map`} />
          </svg>{" "}
          {vehicle?.location}
        </div>

        <span className={styles.catalog_Title}>
          {vehicle?.price ? `€ ${Number(vehicle.price).toFixed(2)}` : ""}
        </span>
      </div>

      <ul className={styles.gallery}>
        {vehicle?.gallery?.map((item, index) => (
          <li key={index}>
            <img
              className={styles.photo}
              src={item.thumb}
              alt={`Gallery image ${index + 1}`}
            />
          </li>
        ))}
      </ul>

      <p className={styles.description}>{vehicle?.description}</p>

      <ul className={styles.details_list}>
        <li className={styles.details_item}>
          <NavLink className={activeLink} to="features">
            Features
          </NavLink>
        </li>
        <li className={styles.details_item}>
          <NavLink className={activeLink} to="reviews">
            Reviews
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default Detail;
