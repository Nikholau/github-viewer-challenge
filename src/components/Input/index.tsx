import { CSSProperties, InputHTMLAttributes, useEffect, useState } from "react";
import './styles.scss';

interface IError {
  error?: boolean;
  message?: string;
}

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name?: string;
  label?: string;
  error?: IError;
  formAttributes?: any;
  extraStyles?: CSSProperties;
}

export const Input: React.FC<IInputProps> = ({
  name,
  label,
  error,
  formAttributes,
  extraStyles,
  ...rest
}) => {
  const [isError, setIsError] = useState<IError>();

  useEffect(() => {
    if (error) setIsError({ ...error });
  }, [error]);

  return (
    <div className="inputContainer">
      {label && <label className="label">{label}</label>}
      <input
        className={`input ${isError?.error ? 'error' : ''}`}
        name={name}
        onChange={(e) => formAttributes?.setFieldValue(name, e.target.value)}
        {...rest}
      />
      {isError?.error && <span className="errorMessage">{isError.message}</span>}
    </div>
  );
};