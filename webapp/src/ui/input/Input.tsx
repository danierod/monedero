import {
  ChangeEventHandler,
  FocusEventHandler,
  FunctionComponent,
} from "react";
import styles from "./input.module.scss";

type InputProps = {
  className?: string;
  type: "email" | "password" | "text";
  name?: string;
  value?: string;
  placeholder?: string;
  errorMessage?: string;
  onChange?: ChangeEventHandler<HTMLInputElement> | undefined;
  onBlur?: FocusEventHandler<HTMLInputElement> | undefined;
};

const Input: FunctionComponent<InputProps> = ({
  className,
  type,
  name,
  value,
  placeholder,
  errorMessage,
  onBlur,
  onChange,
}) => {
  return (
    <div className={styles.inputWrapper}>
      <input
        className={`${styles.input} ${className}`}
        type={type}
        name={name}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        placeholder={placeholder}
      />
      {errorMessage && (
        <span className={styles.inputError}>{errorMessage}</span>
      )}
    </div>
  );
};

export default Input;
