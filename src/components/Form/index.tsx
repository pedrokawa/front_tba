import React, { FormEvent, useState } from "react";
import { Button } from "../Button";
import { Input } from "../Input";
import { Container, Content, FormElement } from "./styles";

export const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  const onClickhandler = () => {
      alert('Enviado')
  }

  return (
    <Container>
      <FormElement onSubmit={handleSubmit}>
        <Content>
          <label>Usuário</label>
            
          <Input
            type="email"
            placeHolder="Digite seu usuário"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Senha</label>
          <Input
            type="password"
            placeHolder="Digite sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button type="submit" onClick={onClickhandler}>Enviar</Button>
        </Content>
      </FormElement>
    </Container>
  );
};
