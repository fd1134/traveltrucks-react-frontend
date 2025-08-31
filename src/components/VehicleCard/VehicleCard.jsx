
import { Link } from "react-router-dom";
import Features from "../Features/Features";
import styles from "./VehicleCard.module.css";
import icons from "../../assets/icons.svg";
import Button from "../Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { selectFavourites } from "../../redux/favourites/selectors";
import { toggleFavourite } from "../../redux/favourites/slice";



const VehicleCard = ({ vehicle }) => {

 const dispatch = useDispatch();
  const favourites = useSelector(selectFavourites);
  const isFavourite = Array.isArray(favourites) && favourites.includes(vehicle.id);

  const handleToggleFavourite = () => {
    dispatch(toggleFavourite(vehicle.id));
  };
 
  return (
   <div className={styles.item_wrapper}>
      {vehicle.gallery?.[0]?.thumb && (
        <img
          className={styles.photo}
          src={`${vehicle.gallery[0].thumb}`}
          
          alt={`${vehicle.name}`}
        />
      )}
      <div className={styles.info_wrapper}>
        <div className={styles.name_wrapper}>
          <h2 className={styles.name_title}>{vehicle.name}</h2>
          <div className={styles.favourite_wrapper}>
            <span>{`€ ${Number(vehicle.price).toFixed(2)}`}</span>
            <svg
              width="26"
              height="24"
              onClick={handleToggleFavourite}
              fill={isFavourite ? "#e44848" : "#101828"}
              cursor='pointer'>
              <use href={`${icons}#heard`} />
            </svg>
          </div>
        </div>
        <div className={styles.rating_wrapper}>
          <svg width="16" height="16">
            <use href={`${icons}#icon-Rating`} />
          </svg>
          <p className={styles.reviews}>{vehicle.rating} ({vehicle.reviews.length} Reviews)</p>
          <svg width="20" height="20">
            <use href={`${icons}#Map`} />
          </svg> {vehicle.location}
        </div>
        <p className={styles.item_description}>{`${vehicle.description.substring(0, 60)}` + "..."}</p>
        <Features vehicle={vehicle} />
        <Link to={`/catalog/${vehicle.id}`}  >
          
           <Button variant="filled" type="submit">
              Show mores
            </Button>
        </Link>
      </div>
    </div>
  );
}

export default VehicleCard;
