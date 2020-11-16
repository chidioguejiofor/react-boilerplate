import styled from "@emotion/styled";
import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Button Type gsd
   */
  sample?: boolean;
}

const Button = styled.button<ButtonProps>`
  background-color: red;
  color: white;
`;

export default Button;
