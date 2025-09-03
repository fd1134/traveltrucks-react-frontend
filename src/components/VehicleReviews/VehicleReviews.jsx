
import { useSelector} from "react-redux";
import { Toaster } from "react-hot-toast";
import { selectVehicle} from "../../redux/vehicles/selectors";
import ClientForm from '../ClientForm/ClientForm'
import styles from './VehicleReviews.module.css'

import icons from '../../assets/icons.svg';
import { nanoid } from 'nanoid'; 

const VehicleReviews = () => {
    const vehicle = useSelector(selectVehicle);
  if (!vehicle) {
    return <p>No vehicle data found.</p>;
  }


    
 
    const totalStars = 5;
  return (
    <div className={styles.review}>
          <ul className={styles.list}>
        {(vehicle.reviews.length === 0)? (<p>Sorry, there are no reviews!</p> ):vehicle.reviews.map(item => (
          <li className={styles.list_item} key={nanoid()}>
            <div className={styles.reviewer_wrapper} >
                <div className={styles.reviewer_name}>{item.reviewer_name.charAt(0)}</div>
                    <div>
                        <h3>{item.reviewer_name}</h3>
                   {[...Array(totalStars)].map((_, starIndex) => (
                      <svg  width="16" height="16"  fill={starIndex < item.reviewer_rating ? "#ffc531" : "#f2f4f7"}  key={nanoid()}>
                          <use href={`${icons}#icon-Rating-1`} />
                      </svg>))}   
                    </div>
            </div>
                <p className={styles.comment} >{item.comment}</p>
          </li>
        ))}
      </ul>
          <ClientForm/>
           <Toaster position="top-right" reverseOrder={false} />
    </div>
  )
}

export default VehicleReviews;