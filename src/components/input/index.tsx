import React from "react";
import styles from "./styles.module.css";
import { UseFormRegister } from "react-hook-form";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  label?: string;
  register: UseFormRegister<any>;
  error?: any;
  color?: "primary" | "secondary" | "warning" | "blocked";
  size?: "small" | "medium" | "large";
};

const Input: React.FC<InputProps> = ({
  name,
  label,
  error,
  register,
  color = "primary",
  size = "medium",
  ...props
}) => {
  return (
    <span className={`${styles.styled_input}`}>
      {label && <label htmlFor={name}>{label}</label>}
      <input
        id={name}
        className={`${styles[color]} ${styles[size]}`}
        {...register(name)}
        {...props}
      />
      {error}
    </span>
  );
};

export default Input;
