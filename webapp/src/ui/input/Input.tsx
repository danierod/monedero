import {
  ChangeEventHandler,
  FocusEventHandler,
  FunctionComponent,
  InputHTMLAttributes,
} from "react";
import styles from "./input.module.scss";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  errorMessage?: string;
};

const Input: FunctionComponent<InputProps> = (props) => {
  const { className, errorMessage } = props;

  return (
    <div className={styles.inputWrapper}>
      <input className={`${styles.input} ${className}`} {...props} />
      {errorMessage && (
        <span className={styles.inputError}>{errorMessage}</span>
      )}
    </div>
  );
};

export default Input;
