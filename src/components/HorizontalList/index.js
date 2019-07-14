import React from "react";

import { Container, List, ListDiv } from "./styles";
import ItemList from "./ItemList";

const HorizontalList = ({ title }) => (
  <Container>
    <p>{title}</p>
    <List>
      <ItemList />
      <ItemList />
      <ItemList />
      <ItemList />
      <ItemList />
      <ItemList />
      <ItemList />
      <ItemList />
    </List>
  </Container>
);

export default HorizontalList;
