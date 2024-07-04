import styled from "styled-components";
import { css } from "@emotion/react";

type ButtonProps = {
  size: "sm" | "md" | "lg";
  variant: "primary" | "secondary" | "ghost" | "white";
  children: React.ReactNode;
  onClick: () => void;

  value: string;
  disabled: boolean;
};

const Button = ({ children, onClick, ...styleProps }: ButtonProps) => {
  {
    return (
      <ButtonStyle {...styleProps} onClick={onClick}>
        <div>{children}</div>
      </ButtonStyle>
    );
  }
};

export default Button;

const ButtonStyle = styled.button<ButtonProps>``;

// import theme from "@components/lib/styles/theme";

export const buttonSize = {
  small: css`
    width: 50px;
    height: 30px;
  `,
  medium: css`
    width: 150px;
    height: 30px;
  `,
};

export const backButtonColorOfState = {
  normal: css`
    &:hover {
      background-color: #535050;
    }
  `,
};

export const whiteButtonColorOfState = {
  normal: css`
    border: 1px solid #7a7979;

    &:hover {
      background-color: #f8f8f8;
    }
  `,
};

export const brownButtonColorOfState = {
  normal: css`
    &:hover {
      background-color: #5f3837;
    }
  `,
};

export const buttonType = {
  black: backButtonColorOfState,
  white: whiteButtonColorOfState,
  brown: brownButtonColorOfState,
};
