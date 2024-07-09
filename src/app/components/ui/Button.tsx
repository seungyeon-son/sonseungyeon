import styled from "styled-components";
import { css } from "@emotion/react";

interface ButtonProps {
  size: "sm" | "md" | "lg";
  variant: "primary" | "secondary" | "ghost" | "white";
  children: React.ReactNode;
  onClick: () => void;
  value: string;
  disabled: boolean;
}

const Button = ({ children, onClick, size, variant, ...styleProps }: ButtonProps) => {
  {
    return (
      <ButtonStyle {...styleProps} onClick={onClick} size={size} variant={variant}>
        <div>{children}</div>
      </ButtonStyle>
    );
  }
};

export default Button;

// export const size = {
//   sm: css`
//     width: 50px;
//     height: 30px;
//   `,
//   md: css`
//     width: 150px;
//     height: 30px;
//   `,
//   lg: css`
//     width: 230px;
//     height: 30px;
//   `,
// };

const ButtonStyle = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  overflow: hidden;
  border-radius: 6px;
  font-size: 14px;
  line-height: 1em;
  &:hover {
    opacity: 0.9;
  }
  &:disabled {
    opacity: 0.5;
  }
`;

/* 
  ${(ButtonProps) =>
    ButtonProps.size === "sm" ||
    css`
      width: 100px;
    `}
  ${(ButtonProps: any) =>
    ButtonProps.size === "sm" &&
    css`
      display: flex;
      align-items: center;
      justify-content: center;
      color: #a1a4aa;
      font-size: 14px;
      font-weight: 400;
      background: none;
      :hover {
        background: #3f454f;
      }
      :disabled {
        color: #606467;
        background: #35393f;
      }
    `} */

// export const ButtonPrimaryBorder = styled(Button)<ButtonProps>`
//   height: var(--button-rg);
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   color: ${(props) => props.color || "#fff"};
//   border: 1px solid;
//   border-color: ${(props) => props.borderColor || "#eee"};
//   background: none;
//   font-size: var(--text-sm);
//   font-weight: var(--font-400);
//   border-radius: ${(props) => props.borderradius || "var(--rounded-sm)"};
//   :hover {
//     background: ${(props) => props.hoverbgcolor || "none"};
//   }
// `;

// export const backButtonColorOfState = {
//   normal: css`
//     &:hover {
//       background-color: #535050;
//     }
//   `,
// };

// export const whiteButtonColorOfState = {
//   normal: css`
//     border: 1px solid #7a7979;

//     &:hover {
//       background-color: #f8f8f8;
//     }
//   `,
// };

// export const brownButtonColorOfState = {
//   normal: css`
//     &:hover {
//       background-color: #5f3837;
//     }
//   `,
// };

// export const buttonType = {
//   black: backButtonColorOfState,
//   white: whiteButtonColorOfState,
//   brown: brownButtonColorOfState,
// };
