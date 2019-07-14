import React from "react";

import {
  Container,
  LeftHeader,
  ImageLeft,
  TextHome,
  TextSeries,
  TextMovies,
  TextAddedRecently,
  RightHeader
} from "./styles";
import NetflixIcon from "../../images/netflix.svg";

const Header = () => (
  <Container>
    <LeftHeader>
      <ImageLeft src={NetflixIcon} alt="Netflix" />
      <TextHome>Início</TextHome>
      <TextSeries>Séries</TextSeries>
      <TextMovies>Filmes</TextMovies>
      <TextAddedRecently>Adicionados recentemente</TextAddedRecently>
    </LeftHeader>
    <RightHeader>
      <div>Testando aqui</div>
    </RightHeader>
  </Container>
);

export default Header;
