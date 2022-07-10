import { CSSProperties, InputHTMLAttributes } from "react";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name?: string;
  label?: string;
  formAttributes?: any;
  extraStyles?: CSSProperties;
}

export const Input: React.FC<IInputProps> = ({
  name,
  label,
  formAttributes,
  extraStyles,
  ...rest
}) => {
  return (
    <input type="text" />
  )};