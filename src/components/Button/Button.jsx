import styles from "./Button.module.css";

 const Button = ({ children, variant = "filled", ...props }) => {
  return (
    <button className={`${styles.btn} ${styles[`btn--${variant}`]}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
