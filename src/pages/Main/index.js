import React from "react";

import { Wrapper, Container, Content, TextMinhaLista } from "./styles";

import Header from "../../components/Header";
import HorizontalList from "../../components/HorizontalList";
import GlobalStyle from "../../styles/global";

const Main = () => (
  <Wrapper>
    <GlobalStyle />
    <Container>
      <Header />
      <Content>
        <HorizontalList title="Minha Lista" />
        <HorizontalList title="Continuar assistindo como Petrovick" />
        <HorizontalList title="Populares na Netflix" />
        <HorizontalList title="Em Alta" />
        <HorizontalList title="Novidades da semana" />
        <HorizontalList title="Porque assistiu a The Flash" />
      </Content>
    </Container>
  </Wrapper>
);

export default Main;
