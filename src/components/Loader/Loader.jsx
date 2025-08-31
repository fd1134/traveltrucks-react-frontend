import ClipLoader from "react-spinners/ClipLoader";
import css from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={css.wrapper}>
      <ClipLoader color="#4fa94d" size={80} />
    </div>
  );
};

export default Loader;