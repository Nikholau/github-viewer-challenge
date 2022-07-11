import { ButtonHTMLAttributes, CSSProperties } from "react";
import "./styles.scss";

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: () => void;
  extraStyles?: CSSProperties;
  isLoading?: boolean;
}

export const Button: React.FC<IButtonProps> = ({
  onClick,
  extraStyles,
  children,
  title,
  type,
  ...rest
}) => {
  return (
    <button
      className="containerButton"
      style={extraStyles}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
};