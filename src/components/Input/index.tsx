import React from "react";
import { Container, InputElement } from "./styles";

interface IInputProps {
  type: string;
  value?: string;
  placeHolder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input: React.FC<IInputProps> = ({ placeHolder, type, value, onChange }) => {
  return (
    <Container>
      <InputElement type={type} value={value} placeholder={placeHolder} onChange={onChange} />
    </Container>
  );
};
