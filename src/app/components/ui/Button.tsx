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
    height: 30px;
  `,
  md: css`
    width: 150px;
    height: 30px;
  `,
  lg: css`
    width: 230px;
    height: 30px;
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
      background-color: #fff;
      color: #45434d;
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
      color: black;
      border: 1px solid black;
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
