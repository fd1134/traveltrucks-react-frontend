
import ClientForm from '../ClientForm/ClientForm'
import styles from './VehicleReviews.module.css'

import icons from '../../assets/icons.svg';
import { nanoid } from 'nanoid'; 

const VehicleReviews = () => {
    const truck =   {
      "id": "23",
      "name": "Skyline Traveler",
      "price": 13000,
      "rating": 4.5,
      "location": "Ukraine, Dnipro",
      "description": "The Skyline Traveler offers a luxurious experience...",
      "form": "fullyIntegrated",
      "length": "8.0m",
      "width": "2.6m",
      "height": "3.9m",
      "tank": "220l",
      "consumption": "35l/100km",
      "transmission": "automatic",
      "engine": "diesel",
      "AC": true,
      "bathroom": true,
      "kitchen": true,
      "TV": true,
      "radio": true,
      "refrigerator": true,
      "microwave": true,
      "gas": true,
      "water": true,
      "gallery": [
        {
          "thumb": "https://ftp.goit.study/img/campers-test-task/7-2.webp",
          "original": "https://ftp.goit.study/img/campers-test-task/7-2.webp"
        },
        {
          "thumb": "https://ftp.goit.study/img/campers-test-task/7-3.webp",
          "original": "https://ftp.goit.study/img/campers-test-task/7-3.webp"
        }
      ],
      "reviews": [
        {
          "reviewer_name": "Alice",
          "reviewer_rating": 5,
          "comment": "One of the best campers we've ever used!"
        },
        {
          "reviewer_name": "Bob",
          "reviewer_rating": 3,
          "comment": "Good for short trips, but fuel consumption is high."
        }
      ]
    };
    
 
    const totalStars = 5;
  return (
    <div className={styles.review}>
          <ul className={styles.list}>
        {(truck.reviews.length === 0)? (<p>Sorry, there are no reviews!</p> ):truck.reviews.map(item => (
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
    </div>
  )
}

export default VehicleReviews;