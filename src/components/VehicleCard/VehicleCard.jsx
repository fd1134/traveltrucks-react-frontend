
import Features from "../Features/Features";
import styles from "./VehicleCard.module.css";
import icons from "../../assets/icons.svg";
import { Link } from "react-router-dom";
import Button from "../Button/Button";




const VehicleCard = () => {
  const handleToggleFavourite = () => {
    // Logic to toggle favourite status
  };
  const isFavourite = false; // Replace with actual favourite status
  const vehicle = 
    {
      "id": "6",
      "name": "Road Bear A 30-32",
      "price": 14000,
      "rating": 4.4,
      "location": "Ukraine, Kharkiv",
      "description": "Embark on a luxurious journey with the Road Bear A 30-32, a fully integrated motorhome designed to elevate your travel experience. This spacious and stylish RV is perfect for families or groups of six, offering a seamless blend of comfort, convenience, and sophistication. Explore the open roads in unparalleled style with the Road Bear A 30-32.",
      "form": "fullyIntegrated",
      "length": "9.45m",
      "width": "2.65m",
      "height": "3.95m",
      "tank": "302l",
      "consumption": "38l/100km",
      "transmission": "automatic",
      "engine": "hybrid",
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
          "thumb": "https://ftp.goit.study/img/campers-test-task/6-1.webp",
          "original": "https://ftp.goit.study/img/campers-test-task/6-1.webp"
        },
        {
          "thumb": "https://ftp.goit.study/img/campers-test-task/6-2.webp",
          "original": "https://ftp.goit.study/img/campers-test-task/6-2.webp"
        },
        {
          "thumb": "https://ftp.goit.study/img/campers-test-task/6-3.webp",
          "original": "https://ftp.goit.study/img/campers-test-task/6-3.webp"
        }
      ],
      "reviews": [
        {
          "reviewer_name": "Alice",
          "reviewer_rating": 5,
          "comment": "The Road Bear A 30-32 exceeded our expectations! A spacious and well-designed motorhome with all the amenities one could ask for. The fully integrated features added a touch of luxury to our road trip. Highly recommended for families seeking a premium RV experience."
        },
        {
          "reviewer_name": "Bob",
          "reviewer_rating": 3,
          "comment": "The Road Bear A 30-32 is a decent option for a large group. However, we faced some minor issues with functionality during our trip. The overall experience was satisfactory, but improvements can be made for the price."
        },
        {
      "id": "18",
      "name": "Journey Escape",
      "price": 9000,
      "rating": 4.5,
      "location": "Ukraine, Odesa",
      "description": "Take a journey you'll never forget with the Journey Escape, a comfortable and efficient panel truck...",
      "form": "panelTruck",
      "length": "5.9m",
      "width": "2.1m",
      "height": "2.6m",
      "tank": "118l",
      "consumption": "13.5l/100km",
      "transmission": "automatic",
      "engine": "petrol",
      "AC": true,
      "bathroom": false,
      "kitchen": true,
      "TV": true,
      "radio": true,
      "refrigerator": false,
      "microwave": true,
      "gas": false,
      "water": true,
      "gallery": [
        {
          "thumb": "https://ftp.goit.study/img/campers-test-task/5-2.webp",
          "original": "https://ftp.goit.study/img/campers-test-task/5-2.webp"
        },
        {
          "thumb": "https://ftp.goit.study/img/campers-test-task/5-3.webp",
          "original": "https://ftp.goit.study/img/campers-test-task/5-3.webp"
        }
      ],
      "reviews": [
        {
          "reviewer_name": "Alice",
          "reviewer_rating": 5,
          "comment": "The perfect camper for a family road trip!"
        },
        {
          "reviewer_name": "Bob",
          "reviewer_rating": 4,
          "comment": "Comfortable, but a bit small for longer journeys."
        }
      ]
    },
      ]
    }
 
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
        <Link to={`/catalog/${vehicle.id}`} target="_blank" rel="noopener noreferrer">
          
           <Button variant="filled" type="submit">
              Show mores
            </Button>
        </Link>
      </div>
    </div>
  );
}

export default VehicleCard;
