
import VehicleCard from "../VehicleCard/VehicleCard";
import styles from "./VehicleList.module.css";
import pigImage from "../../assets/images/pic.png";
import Button from "../Button/Button";

const vehicles = [
  {
    id: 1,
    title: "Mavericks",
    price: "€8000.00",
    location: "Kyiv, Ukraine",
    rating: "⭐ 4.4 (12 Reviews)",
    image: pigImage,
    features: ["Automatic", "Petrol", "Kitchen", "AC"],
    description:
      "Embrace simplicity and freedom with the Mavericks panel truck...",
  },
  {
    id: 2,
    title: "Kuga Camper",
    price: "€8000.00",
    location: "Kyiv, Ukraine",
    rating: "⭐ 4.2 (10 Reviews)",
    image: pigImage,
    features: ["Automatic", "Petrol", "Kitchen", "AC"],
    description:
      "The pictures shown here are example vehicles of the respective...",
  },
];

const VehicleList = () => {
  return (
    <div className={styles.list_wrapper}>
      {vehicles.map((vehicle) => (
        <VehicleCard key={vehicle.id} vehicle={vehicle} />
      ))}
      <Button variant="outlined" type="submit">
             Load more
            </Button>
      
    </div>
  );
}

export default VehicleList;