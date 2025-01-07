import styled, { css } from "styled-components";

interface ButtonProps {
  size: "sm" | "md" | "lg";
  variant: "primary" | "secondary" | "ghost" | "white";
  children: React.ReactNode;
  value: string;
  disabled: boolean;
}

const sizeStyles = {
  sm: css`
    width: 50px;
    height: 32px;
    font-size: 16px;
  `,
  md: css`
    width: 150px;
    height: 44px;
    font-size: 18px;
  `,
  lg: css`
    width: 230px;
    height: 52px;
    font-size: 20px;
  `,
};

const ButtonStyle = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: 6px;
  font-size: 14px;
  line-height: 1em;
  min-width: 80px;
  height: 56px;
  ${({ size }) => sizeStyles[size]}

  &:hover {
    opacity: 0.9;
  }
  &:disabled {
    opacity: 0.5;
  }
  ${({ variant }) =>
    variant === "primary" &&
    css`
      background-color: #29395d;
      color: #ccc8db;
    `}
  ${({ variant }) =>
    variant === "secondary" &&
    css`
      background-color: grey;
      color: white;
    `}
  ${({ variant }) =>
    variant === "ghost" &&
    css`
      background-color: transparent;
      color: white;
    `}
  ${({ variant }) =>
    variant === "white" &&
    css`
      background-color: white;
      color: black;
      border: 1px solid grey;
    `}
`;

const Button = ({ children, size, variant, ...styleProps }: ButtonProps) => {
  return (
    <ButtonStyle size={size} variant={variant} {...styleProps}>
      <div>{children}</div>
    </ButtonStyle>
  );
};

export default Button;
