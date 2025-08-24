import { NavLink } from 'react-router-dom';
import clsx from "clsx"
import styles from './Detail.module.css';
import icons from "../../assets/icons.svg";
const activeLink = ({ isActive }) => {
  return clsx(styles.details_link, isActive && styles.active);
};


const Detail = () => {
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
    <>
   
    <div className={styles.catalog_Detail}>
      <h2 className={styles.catalog_Title}>{vehicle.name}</h2>
      <div className={styles.rating_wrapper}>
        <svg width="16" height="16">
          <use href={`${icons}#icon-Rating`} />
        </svg>
        <p className={styles.reviews}>{vehicle.rating} ({vehicle.reviews.length} Reviews)</p>
                <svg width="20" height="20">
                  <use href={`${icons}#Map`} />
                </svg> {"vehicle.location"}
        </div>
        <span className={styles.catalog_Title}>{`€ ${Number(14000.00).toFixed(2)}`}</span>
    </div>

     <ul className={styles.gallery}>
       {vehicle.gallery.map((item, index) => (
            <li key={index}>
              <img className={styles.photo} src={item.thumb} alt={`Gallery image ${index + 1}`} />
            </li>
          ))}
     </ul>
   <p className={styles.description}>{vehicle.description}</p>

          <ul className={styles.details_list}>
                    <li className={styles.details_item}><NavLink className={activeLink}  to="features">Features</NavLink></li>
                    <li className={styles.details_item}><NavLink className={activeLink}  to="reviews">Reviews</NavLink></li>
          </ul>
         
     </>
  );
};

export default Detail;