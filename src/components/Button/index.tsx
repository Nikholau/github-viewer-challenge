import { ButtonHTMLAttributes, CSSProperties } from "react";

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: () => void;
  extraStyles?: CSSProperties;
  isLoading?: boolean;
}

export const Button: React.FC<IButtonProps> = ({
  onClick,
  color = 'blue',
  extraStyles,
  isLoading = false,
  children,
  ...rest
}) => {
  return (
    <button
      style={extraStyles}
      color={color}
      onClick={onClick}
      disabled={isLoading}
      {...rest}
    >
      {children}
    </button>
  );
};