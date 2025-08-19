import styles from "./Button.module.css";

export const Button = ({ children, variant = "filled", ...props }) => {
  return (
    <button className={`${styles.btn} ${styles[`btn--${variant}`]}`} {...props}>
      {children}
    </button>
  );
};
