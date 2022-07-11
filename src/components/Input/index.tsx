import { CSSProperties, InputHTMLAttributes, useEffect, useState } from "react";
import './styles.scss';

interface IError {
  error?: boolean;
  name?: string;
  message?: any;
}


interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name?: string;
  placeholder?: string;
  label?: string;
  error?: IError;
  formAttributes?: any;
  extraStyles?: CSSProperties;
}

export const Input: React.FC<IInputProps> = ({
  name,
  placeholder,
  formAttributes,
  extraStyles,
  value,
  label,
  error,
  ...rest
}) => {
  const [isError, setIsError] = useState<IError>();

  useEffect(() => {
    if (error) setIsError({ ...error });
  }, [error]);


  return (
    <>
    <div id="container">
    {label && (
    <label htmlFor={name}>{label}</label>
    )}
    <div className="containerInput">
    <input 
    type="text" 
    name={name}
    placeholder={placeholder}
    value={value}
    onChange={(event) =>
      formAttributes?.setFieldValue(name, event.target.value)
    }
    {...rest}
     />

     {isError?.error === true && error?.name === name && (
          <div className="errorMessage">
            <span>{error?.message}</span>
          </div>
        )}
    </div>
    </div>
    </>
  )};