import React from "react";
import styles from "./styles.module.css";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  color?: "primary" | "secondary" | "warning" | "blocked";
  size?: "small" | "medium" | "large";
};

const Button: React.FC<ButtonProps> = ({
  color = "primary",
  size = "medium",
  children,
  ...props
}) => {
  return (
    <button
      className={`${styles.btn} ${styles[color]} ${styles[size]}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
