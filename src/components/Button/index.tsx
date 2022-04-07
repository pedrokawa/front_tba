import React from "react";
import { ButtonElement, Container } from "./styles";

interface IButtonProps {
  type: "button" | "submit";
  onClick?: () => void;
}

export const Button: React.FC<IButtonProps> = ({ type, onClick, children }) => {
  return (
    <Container>
      <ButtonElement type={type} onClick={onClick}>
        {children}
      </ButtonElement>
    </Container>
  );
};
